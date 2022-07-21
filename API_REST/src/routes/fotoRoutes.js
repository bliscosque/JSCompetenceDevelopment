import express from 'express';
import multer from 'multer';
import fotoController from '../controllers/FotoController';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);

const router = new express.Router();

router.post('/', upload.single('foto'), fotoController.store); // single -> 1 arquivo

export default router;
