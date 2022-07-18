import express from 'express';
import tokenController from '../controllers/TokenController';

const router = new express.Router();

router.post('/', tokenController.store);

export default router;
