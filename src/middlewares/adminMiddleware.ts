import { Request, Response, NextFunction } from 'express';
import { PrismaClient, Role } from '../models';

const prisma = new PrismaClient();

export async function adminOnly(request: Request, response: Response, next: NextFunction) {
  // Ensure the authentication middleware populated `request.admin`.
  // The JWT payload created in the auth controllers includes `adminId` (not nested `admin`).
  const adminPayload = (request as any).admin;

  if (!adminPayload) {
    return response.status(401).json({ message: 'Unauthorized: missing authentication payload' });
  }

  // Token payload uses `adminId` (see adminAuthController.ts). Use that if available.
  const adminId = adminPayload.adminId || adminPayload.id || (adminPayload.admin && adminPayload.admin.id);

  if (!adminId) {
    return response.status(401).json({ message: 'Unauthorized: invalid token payload' });
  }

  try {
    const admin = await prisma.admin.findUnique({ where: { id: adminId } });

    if (!admin || (admin.role !== Role.super_admin)) {
      return response.status(403).json({ status: "Forbidden Route", message: 'Only super admins are allowed to access this route' });
    }

    // Attach role to the request admin payload for downstream handlers.
    (request as any).admin = { ...adminPayload, role: admin.role };
    next();
  } catch (error) {
    console.error("An error occured:"+error);
    return response.status(500).json({ message: 'Server error' });
  }
}
