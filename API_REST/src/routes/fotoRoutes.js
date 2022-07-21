import express from 'express';
import fotoController from '../controllers/FotoController';
import loginRequired from '../middlewares/loginRequired';

const router = new express.Router();

router.post('/', loginRequired, fotoController.store); // single -> 1 arquivo

export default router;
