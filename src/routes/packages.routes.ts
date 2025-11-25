import express from "express";
import { getSpeakerPackages, getSpeakerPackage, getPartnerPackages, getPartnerPackage } from "../controllers/packages_controller";

export const packagesRouter = express.Router();

// Public endpoints for frontend consumption
packagesRouter.get('/speaker-packages', getSpeakerPackages);
packagesRouter.get('/speaker-package', getSpeakerPackage); // query: id or slug

packagesRouter.get('/event-partner-packages', getPartnerPackages);
packagesRouter.get('/event-partner-package', getPartnerPackage); // query: id or slug

export default packagesRouter;
