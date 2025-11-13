"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ministryOnly = ministryOnly;
const models_1 = require("../models");
const prisma = new models_1.PrismaClient();
async function ministryOnly(request, response, next) {
    const userId = request.user.id;
    if (!userId) {
        // console.log(userId)
        return response.status(401).json({ message: 'Unauthorize' });
    }
    try {
        const user = await prisma.users.findUnique({ where: { id: userId } });
        if (!user || (user.role !== models_1.Role.ministry)) {
            return response.status(403).json({ status: "Forbidden Route", message: 'Only LGA Admins are allowed to access this route' });
        }
        request.user = { ...request.user, role: user.role }; // Optionally include role in request
        next();
    }
    catch (error) {
        console.error("An error occured:" + error);
        return response.status(500).json({ message: 'Server error' });
    }
}
