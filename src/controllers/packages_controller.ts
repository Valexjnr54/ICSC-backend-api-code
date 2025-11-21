import { Request, Response } from "express";
import * as pkgService from "../services/packages/packages.service";
import { body, validationResult } from 'express-validator';

// Helpers
function generateSlug(title: string) {
  return title
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeFeatures(features: any) {
  if (Array.isArray(features)) return features;
  if (typeof features === 'string') {
    const trimmed = features.trim();
    // try JSON array first
    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) return parsed;
    } catch (_) {
      // not JSON, fallthrough to CSV
    }
    if (trimmed.length === 0) return [];
    return trimmed.split(',').map(f => f.trim()).filter(Boolean);
  }
  return [];
}

// Express-validator middleware exports
export const validateCreateSpeakerPackage = [
  body('title').exists().withMessage('title is required').isString().trim().notEmpty().withMessage('title must be a non-empty string'),
  body('price').exists().withMessage('price is required').custom((v) => !isNaN(Number(v)) && Number(v) >= 0).withMessage('price must be a non-negative number'),
  body('features').exists().withMessage('features is required').custom((v) => Array.isArray(v) || typeof v === 'string').withMessage('features must be an array or CSV string'),
];

export const validateCreatePartnerPackage = [
  body('title').exists().withMessage('title is required').isString().trim().notEmpty().withMessage('title must be a non-empty string'),
  body('price').exists().withMessage('price is required').custom((v) => !isNaN(Number(v)) && Number(v) >= 0).withMessage('price must be a non-negative number'),
  body('features').exists().withMessage('features is required').custom((v) => Array.isArray(v) || typeof v === 'string').withMessage('features must be an array or CSV string'),
];

// Speaker packages
export async function createSpeakerPackage(request: Request, response: Response) {
  const admin_id = request.admin?.adminId;
  if (!admin_id) return response.status(403).json({ message: 'Unauthorized User' });

  try {
    const check_admin = request.admin; // assume middleware populated admin and role
    if (check_admin.role !== 'super_admin') return response.status(403).json({ message: 'Unauthorized User' });
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    const { title, price, description, features, limitedText } = request.body;
    const parsedPrice = parseFloat(price);
    if (!isFinite(parsedPrice) || parsedPrice < 0) {
      return response.status(400).json({ message: 'Invalid price value' });
    }

    const normalizedFeatures = normalizeFeatures(features);
    if (!Array.isArray(normalizedFeatures) || normalizedFeatures.length === 0) {
      return response.status(400).json({ message: 'Missing or invalid field: features (array or CSV string expected)' });
    }

    const slug = generateSlug(title);

    const created = await pkgService.createSpeakerPackage({ slug, title: title.trim(), price: parsedPrice, description, features: normalizedFeatures, limitedText });
    return response.status(201).json({ message: 'Speaker package created', data: created });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function getSpeakerPackages(_request: Request, response: Response) {
  try {
    const all = await pkgService.getAllSpeakerPackages();
    return response.status(200).json({ message: 'Speaker packages fetched', data: all });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function getSpeakerPackage(request: Request, response: Response) {
  try {
    const idQuery = request.query.id as string | undefined;
    const slugQuery = request.query.slug as string | undefined;
    let record: any = null;
    if (idQuery) {
      const id = parseInt(idQuery, 10);
      record = await pkgService.getSpeakerPackageById(id);
    } else if (slugQuery) {
      record = await pkgService.getSpeakerPackageBySlug(slugQuery);
    } else {
      return response.status(400).json({ message: 'Please provide id or slug as query param' });
    }

    if (!record) return response.status(404).json({ message: 'Not found' });
    return response.status(200).json({ message: 'Speaker package fetched', data: record });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function updateSpeakerPackage(request: Request, response: Response) {
  const admin_id = request.admin?.adminId;
  if (!admin_id) return response.status(403).json({ message: 'Unauthorized User' });

  try {
    const check_admin = request.admin;
    if (check_admin.role !== 'super_admin') return response.status(403).json({ message: 'Unauthorized User' });

    const id = parseInt(request.query.id as string, 10);
    if (!id) return response.status(400).json({ message: 'Package id required' });

    const data = request.body;
    const updated = await pkgService.updateSpeakerPackage(id, data);
    return response.status(200).json({ message: 'Speaker package updated', data: updated });
  } catch (error: any) {
    console.error(error);
    return response.status(500).json({ message: error?.message || 'Internal Server Error' });
  }
}

export async function deleteSpeakerPackage(request: Request, response: Response) {
  const admin_id = request.admin?.adminId;
  if (!admin_id) return response.status(403).json({ message: 'Unauthorized User' });

  try {
    const check_admin = request.admin;
    if (check_admin.role !== 'super_admin') return response.status(403).json({ message: 'Unauthorized User' });

    const id = parseInt(request.query.id as string, 10);
    if (!id) return response.status(400).json({ message: 'Package id required' });

    const deleted = await pkgService.deleteSpeakerPackage(id);
    return response.status(200).json({ message: 'Speaker package deleted', data: deleted });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

// Partner packages
export async function createPartnerPackage(request: Request, response: Response) {
  const admin_id = request.admin?.adminId;
  if (!admin_id) return response.status(403).json({ message: 'Unauthorized User' });

  try {
    const check_admin = request.admin; // assume middleware populated admin and role
    if (check_admin.role !== 'super_admin') return response.status(403).json({ message: 'Unauthorized User' });
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    const { title, price, description, features, limitedText } = request.body;
    const parsedPrice = parseFloat(price);
    if (!isFinite(parsedPrice) || parsedPrice < 0) {
      return response.status(400).json({ message: 'Invalid price value' });
    }

    const normalizedFeatures = normalizeFeatures(features);
    if (!Array.isArray(normalizedFeatures) || normalizedFeatures.length === 0) {
      return response.status(400).json({ message: 'Missing or invalid field: features (array or CSV string expected)' });
    }

    const slug = generateSlug(title);

    const created = await pkgService.createPartnerPackage({ slug, title: title.trim(), price: parsedPrice, description, features: normalizedFeatures, limitedText });
    return response.status(201).json({ message: 'Partner package created', data: created });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function getPartnerPackages(_request: Request, response: Response) {
  try {
    const all = await pkgService.getAllPartnerPackages();
    return response.status(200).json({ message: 'Partner packages fetched', data: all });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function getPartnerPackage(request: Request, response: Response) {
  try {
    const idQuery = request.query.id as string | undefined;
    const slugQuery = request.query.slug as string | undefined;
    let record: any = null;
    if (idQuery) {
      const id = parseInt(idQuery, 10);
      record = await pkgService.getPartnerPackageById(id);
    } else if (slugQuery) {
      record = await pkgService.getPartnerPackageBySlug(slugQuery);
    } else {
      return response.status(400).json({ message: 'Please provide id or slug as query param' });
    }

    if (!record) return response.status(404).json({ message: 'Not found' });
    return response.status(200).json({ message: 'Partner package fetched', data: record });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function updatePartnerPackage(request: Request, response: Response) {
  const admin_id = request.admin?.adminId;
  if (!admin_id) return response.status(403).json({ message: 'Unauthorized User' });

  try {
    const check_admin = request.admin;
    if (check_admin.role !== 'super_admin') return response.status(403).json({ message: 'Unauthorized User' });

    const id = parseInt(request.query.id as string, 10);
    if (!id) return response.status(400).json({ message: 'Package id required' });

    const data = request.body;
    const updated = await pkgService.updatePartnerPackage(id, data);
    return response.status(200).json({ message: 'Partner package updated', data: updated });
  } catch (error: any) {
    console.error(error);
    return response.status(500).json({ message: error?.message || 'Internal Server Error' });
  }
}

export async function deletePartnerPackage(request: Request, response: Response) {
  const admin_id = request.admin?.adminId;
  if (!admin_id) return response.status(403).json({ message: 'Unauthorized User' });

  try {
    const check_admin = request.admin;
    if (check_admin.role !== 'super_admin') return response.status(403).json({ message: 'Unauthorized User' });

    const id = parseInt(request.query.id as string, 10);
    if (!id) return response.status(400).json({ message: 'Package id required' });

    const deleted = await pkgService.deletePartnerPackage(id);
    return response.status(200).json({ message: 'Partner package deleted', data: deleted });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}
