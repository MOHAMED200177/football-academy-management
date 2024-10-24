import multer, { Multer } from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from './../config/cloudinaryConfig';
import { Request } from 'express';
import path from 'path';

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'MfC', // folder in Cloudinary to store images
        allowed_formats: ['jpeg', 'jpg', 'png'],
        public_id: (req: Request, file: Express.Multer.File) => file.originalname.split('.')[0]
    } as any,
});

// File filter function with type annotations
const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error('Error: Images Only!'));
    }
};

// Multer upload configuration
const upload: Multer = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 }, // 5 MB limit
    fileFilter: fileFilter,
});

export default upload;
