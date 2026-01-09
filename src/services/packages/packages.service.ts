import { PrismaClient } from "../../models";

const prisma = new PrismaClient();

// Speaker Package Services
export async function createSpeakerPackage(data: any) {
  return prisma.speakerPackage.create({ data });
}

export async function getAllSpeakerPackages() {
  return prisma.speakerPackage.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function getSpeakerPackageById(id: number) {
  return prisma.speakerPackage.findUnique({ where: { id } });
}

export async function getSpeakerPackageBySlug(slug: string) {
  return prisma.speakerPackage.findUnique({ where: { slug } });
}

export async function updateSpeakerPackage(id: number, data: any) {
  return prisma.speakerPackage.update({ where: { id }, data });
}

export async function deleteSpeakerPackage(id: number) {
  return prisma.speakerPackage.delete({ where: { id } });
}

// Partner Package Services
export async function createPartnerPackage(data: any) {
  return prisma.partnerPackage.create({ data });
}

export async function getAllPartnerPackages() {
  return prisma.partnerPackage.findMany({ orderBy: { createdAt: 'asc' } });
}

export async function getPartnerPackageById(id: number) {
  return prisma.partnerPackage.findUnique({ where: { id } });
}

export async function getPartnerPackageBySlug(slug: string) {
  return prisma.partnerPackage.findUnique({ where: { slug } });
}

export async function updatePartnerPackage(id: number, data: any) {
  return prisma.partnerPackage.update({ where: { id }, data });
}

export async function deletePartnerPackage(id: number) {
  return prisma.partnerPackage.delete({ where: { id } });
}

export default {
  createSpeakerPackage,
  getAllSpeakerPackages,
  getSpeakerPackageById,
  getSpeakerPackageBySlug,
  updateSpeakerPackage,
  deleteSpeakerPackage,
  createPartnerPackage,
  getAllPartnerPackages,
  getPartnerPackageById,
  getPartnerPackageBySlug,
  updatePartnerPackage,
  deletePartnerPackage,
};
