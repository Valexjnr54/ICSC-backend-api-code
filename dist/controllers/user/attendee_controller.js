"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAttendee = createAttendee;
exports.allAttendees = allAttendees;
exports.singleAttendee = singleAttendee;
exports.deleteAttendee = deleteAttendee;
exports.uploadAttendeesCSV = uploadAttendeesCSV;
exports.downloadAttendeeCSVTemplate = downloadAttendeeCSVTemplate;
exports.getAttendeeStats = getAttendeeStats;
const models_1 = require("../../models");
const crypto_1 = __importDefault(require("crypto"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const express_validator_1 = require("express-validator");
const emailSender_1 = require("../../utils/emailSender");
const stream_1 = require("stream");
const csv_parser_1 = __importDefault(require("csv-parser"));
const prisma = new models_1.PrismaClient();
function generateTempPassword() {
    return crypto_1.default.randomBytes(5).toString('hex'); // 10 characters
}
// Resolve the creator (Admin or Users) from the polymorphic created_by fields
async function resolveCreator(created_by_type, created_by_id) {
    if (!created_by_type || !created_by_id)
        return null;
    if (created_by_type === 'ADMIN') {
        return prisma.admin.findUnique({ where: { id: created_by_id }, select: { fullname: true } });
    }
    if (created_by_type === 'USER') {
        return prisma.users.findUnique({ where: { id: created_by_id }, select: { contact_person: true } });
    }
    return null;
}
async function createAttendee(request, response) {
    const admin_id = request.user?.id ?? null;
    // Check admin presence early
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Run validation before accessing request.body
        const validationRules = [
            (0, express_validator_1.body)('fullname').notEmpty().withMessage('Full Name is required'),
            (0, express_validator_1.body)('phone_number').notEmpty().withMessage('Phone Number is required'),
            // nin is optional — don't attach a "required" message to an optional validator
            (0, express_validator_1.body)('nin').optional(),
            (0, express_validator_1.body)('email').isEmail().withMessage('Invalid email address'),
            (0, express_validator_1.body)('position').notEmpty().withMessage('Position is required'),
            (0, express_validator_1.body)('organization').notEmpty().withMessage('Organization is required'),
            (0, express_validator_1.body)('job_title').notEmpty().withMessage('Job Title is required'),
            (0, express_validator_1.body)('department').notEmpty().withMessage('Department is required'),
            (0, express_validator_1.body)('department_agency').notEmpty().withMessage('Department/Agency is required'),
            (0, express_validator_1.body)('staff_id').optional(),
            (0, express_validator_1.body)('office_location').optional(),
            (0, express_validator_1.body)('remark').optional(),
            (0, express_validator_1.body)('grade').notEmpty().withMessage('Grade is required'),
        ];
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        // destructure after validation (request.body will be populated by body-parser middleware)
        const { prefix, fullname, organization, phone_number, email, nin, position, department, department_agency, staff_id, office_location, job_title, remark, grade } = request.body;
        // Retrieve the attendees by attendees_id
        const check_admin = await prisma.users.findUnique({ where: { id: admin_id } });
        const admin_role = check_admin?.role;
        // Check if the role is not 'Attendee'
        if (admin_role !== 'ministry') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const existing = await prisma.attendees.findUnique({ where: { email } });
        if (existing) {
            return response.status(400).json({ message: 'Email already registered' });
        }
        const password = generateTempPassword();
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
        const newAttendee = await prisma.attendees.create({
            data: {
                prefix,
                fullname,
                organization,
                phone_number,
                email,
                nin,
                position,
                department,
                department_agency,
                staff_id,
                office_location,
                job_title,
                remark,
                grade,
                password: hashedPassword,
                created_by_id: admin_id,
                created_by_type: 'USER',
            },
        });
        await (0, emailSender_1.sendWelcomeEmail)(email, 'Welcome to International Civil Service Conference', newAttendee, password);
        // Attach creator details to the response
        const creator = await resolveCreator(newAttendee.created_by_type, newAttendee.created_by_id);
        return response.status(201).json({ message: 'Attendee created successfully', data: { ...newAttendee, created_by: creator } });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function allAttendees(request, response) {
    const admin_id = request.user.id;
    // Check if admin_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by admin_id
        const check_admin = await prisma.users.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
        // Check if the role is not 'ministry'
        if (role !== 'ministry') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const allAttendees = await prisma.attendees.findMany({
            where: { created_by_type: 'USER', created_by_id: admin_id },
            orderBy: { createdAt: 'desc' }
        });
        // Resolve creators for each attendee 
        const attendeesWithCreators = await Promise.all(allAttendees.map(async (att) => {
            const creator = await resolveCreator(att.created_by_type, att.created_by_id);
            return { ...att, created_by: creator };
        }));
        return response.status(200).json({ message: 'Attendee(s) fetched', data: attendeesWithCreators });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function singleAttendee(request, response) {
    const id = parseInt(request.query.attendee_id, 10);
    const admin_id = request.user?.id ?? null;
    // Check if attendees_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    if (!id) {
        return response.status(403).json({ message: 'Attendee ID required' });
    }
    try {
        // Retrieve the attendees by attendees_id
        const check_admin = await prisma.users.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
        // Check if the role is not 'Attendee'
        if (role !== 'ministry') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const singleAttendee = await prisma.attendees.findUnique({
            where: {
                id: id,
                created_by_id: admin_id
            },
        });
        if (!singleAttendee) {
            return response.status(404).json({ message: 'Attendee not found' });
        }
        const creator = await resolveCreator(singleAttendee.created_by_type, singleAttendee.created_by_id);
        return response.status(200).json({ message: 'Attendee fetched', data: { ...singleAttendee, created_by: creator } });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function deleteAttendee(request, response) {
    const id = parseInt(request.query.attendee_id, 10);
    const admin_id = request.user?.id ?? null;
    // Check if attendees_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    if (!id) {
        return response.status(403).json({ message: 'Attendee ID required' });
    }
    try {
        // Retrieve the attendees by attendees_id
        const check_admin = await prisma.users.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
        // Check if the role is not 'Attendee'
        if (role !== 'ministry') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const attendees = await prisma.attendees.findUnique({
            where: { id, created_by_id: admin_id }
        });
        if (!attendees) {
            return response.status(404).json({ message: 'Record not found' });
        }
        // Create a new delivery entry in the database
        const deleteAttendee = await prisma.attendees.delete({
            where: {
                id,
                created_by_id: admin_id
            },
        });
        if (!deleteAttendee) {
            return response.status(403).json({ message: 'Unable to delete Attendee' });
        }
        return response.status(200).json({ message: 'Attendee was deleted successfully', data: deleteAttendee });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function uploadAttendeesCSV(request, response) {
    const admin_id = request.user?.id;
    if (!admin_id)
        return response.status(403).json({ message: 'Unauthorized User' });
    try {
        const check_admin = await prisma.users.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
        if (role !== 'ministry')
            return response.status(403).json({ message: 'Unauthorized User' });
        const file = request.file;
        if (!file || !file.buffer)
            return response.status(400).json({ message: 'CSV file is required' });
        const rows = [];
        const errors = [];
        const created = [];
        await new Promise((resolve, reject) => {
            const stream = new stream_1.PassThrough();
            stream.end(file.buffer);
            stream.pipe((0, csv_parser_1.default)())
                .on('data', (data) => {
                rows.push(data);
            })
                .on('end', () => resolve())
                .on('error', (err) => reject(err));
        });
        for (const [idx, raw] of rows.entries()) {
            // Normalize keys: trim and lower-case column names
            const row = {};
            Object.keys(raw).forEach(k => { row[k.trim().toLowerCase()] = String(raw[k]).trim(); });
            const required = ['firstname', 'lastname', 'phone_number', 'email', 'position', 'ministry', 'jobtitle', 'department', 'department_agency', 'grade'];
            const missing = required.filter(r => !row[r] || row[r] === '');
            if (missing.length) {
                errors.push({ row: idx + 1, error: `Missing required fields: ${missing.join(', ')}` });
                continue;
            }
            // Skip if email already exists
            const existing = await prisma.attendees.findUnique({ where: { email: row.email } });
            if (existing) {
                errors.push({ row: idx + 1, error: `Email already registered: ${row.email}` });
                continue;
            }
            try {
                const password = generateTempPassword();
                const hashedPassword = await bcrypt_1.default.hash(password, 10);
                const fullname = `${row.firstname} ${row.lastname}`;
                const newAttendee = await prisma.attendees.create({
                    data: {
                        prefix: row.prefix,
                        fullname: fullname,
                        organization: row.ministry,
                        phone_number: row.phone_number,
                        email: row.email,
                        job_title: row.jobtitle,
                        position: row.position,
                        department: row.department,
                        department_agency: row.department_agency,
                        staff_id: row.staff_id || null,
                        office_location: row.office_location || null,
                        remark: row.remark || null,
                        grade: row.grade,
                        password: hashedPassword,
                        created_by_id: admin_id,
                        created_by_type: 'USER',
                    },
                });
                // send welcome email (do not block loop on failure)
                (0, emailSender_1.sendWelcomeEmail)(newAttendee.email, 'Welcome to International Civil Service Conference', newAttendee, password)
                    .catch(err => console.error('Failed to send welcome email to', newAttendee.email, err));
                created.push({ row: idx + 1, email: newAttendee.email });
            }
            catch (err) {
                console.error('Row creation error', err);
                errors.push({ row: idx + 1, error: err && err.message ? err.message : String(err) });
            }
        }
        return response.status(200).json({ ok: true, status: 'success', message: 'Attendees processed and account created', data: { summary: { total: rows.length, created: created.length, errors: errors.length }, created, errors } });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function downloadAttendeeCSVTemplate(request, response) {
    try {
        // Set headers for CSV download
        response.setHeader('Content-Type', 'text/csv');
        response.setHeader('Content-Disposition', 'attachment; filename="attendee_template.csv"');
        // CSV headers based on the fields used in uploadAttendeesCSV
        const headers = 'prefix,firstname,lastname,ministry,phone_number,email,jobtitle,position,department,department_agency,staff_id,office_location,remark,grade\n';
        // Send the CSV content (headers only for template)
        response.send(headers);
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function getAttendeeStats(request, response) {
    const admin_id = request.user?.id ?? null;
    // Check if admin_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by admin_id
        const check_admin = await prisma.users.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
        // Check if the role is not 'ministry'
        if (role !== 'ministry') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        // Get total attendees created by this user
        const totalAttendees = await prisma.attendees.count({
            where: { created_by_type: 'USER', created_by_id: admin_id }
        });
        // Get pending attendees
        const pendingAttendees = await prisma.attendees.count({
            where: {
                created_by_type: 'USER',
                created_by_id: admin_id,
                status: 'Pending'
            }
        });
        // Get approved attendees
        const approvedAttendees = await prisma.attendees.count({
            where: {
                created_by_type: 'USER',
                created_by_id: admin_id,
                status: 'Approved'
            }
        });
        return response.status(200).json({
            message: 'Attendee stats fetched successfully',
            data: {
                totalAttendees,
                pendingAttendees,
                approvedAttendees
            }
        });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
