import express from 'express';
import homeController from '../controllers/HomeController';

const router = new express.Router();

router.get('/', homeController.index);

export default router;
