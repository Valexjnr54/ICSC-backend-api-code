import { Request, Response, NextFunction } from 'express';
import { PrismaClient, Role } from '../models';

const prisma = new PrismaClient();

export async function lgaOnly(request: Request, response: Response, next: NextFunction) {
    const userId = request.user.id;

    if (!userId) {
        // console.log(userId)
        return response.status(401).json({ message: 'Unauthorize' });
    }

    try {
        const user = await prisma.users.findUnique({ where: { id: userId } });

        if (!user || (user.role !== Role.lga_admin)) {
        return response.status(403).json({ status: "Forbidden Route" ,message: 'Only LGA Admins are allowed to access this route' });
        }

        request.user = { ...request.user, role: user.role }; // Optionally include role in request
        next();
    } catch (error) {
        console.error("An error occured:"+error);
        return response.status(500).json({ message: 'Server error' });
    }
}
