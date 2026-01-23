"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = uploadImage;
exports.uploadVideo = uploadVideo;
exports.uploadFile = uploadFile;
exports.deleteImageFromCloudinary = deleteImageFromCloudinary;
const cloudinaryConfig_1 = __importDefault(require("../config/cloudinaryConfig"));
async function uploadImage(imagePath, folderPath) {
    try {
        const result = await cloudinaryConfig_1.default.uploader.upload(imagePath, {
            folder: folderPath,
        });
        const imageURL = result.secure_url;
        return imageURL;
    }
    catch (error) {
        console.error("Error uploading image:", error);
    }
}
async function uploadVideo(videoPath, folderPath) {
    try {
        const result = await cloudinaryConfig_1.default.uploader.upload(videoPath, {
            resource_type: 'video',
            folder: folderPath
        });
        const videoURL = result.secure_url;
        return videoURL;
    }
    catch (error) {
        console.error("Error uploading video:", error);
    }
}
async function uploadFile(filePath, folderPath) {
    try {
        const result = await cloudinaryConfig_1.default.uploader.upload(filePath, {
            resource_type: 'raw',
            folder: folderPath
        });
        const fileURL = result.secure_url;
        return fileURL;
    }
    catch (error) {
        console.error("Error uploading File:", error);
    }
}
async function deleteImageFromCloudinary(url) {
    try {
        const publicId = getCloudinaryPublicId(url); // You must extract the ID
        await cloudinaryConfig_1.default.uploader.destroy(publicId);
    }
    catch (err) {
        console.error("Failed to delete from Cloudinary:", err);
    }
}
function getCloudinaryPublicId(url) {
    // URL format: https://res.cloudinary.com/{cloud_name}/image/upload/v{version}/{folder}/{public_id}.{format}
    const parts = url.split("/");
    const uploadIndex = parts.indexOf("upload");
    if (uploadIndex === -1)
        return "";
    const folderAndId = parts.slice(uploadIndex + 2); // After 'upload' and version
    return folderAndId.join("/").split(".")[0]; // Remove extension
}
