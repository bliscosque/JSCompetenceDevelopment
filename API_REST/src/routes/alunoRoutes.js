import express from 'express';
import alunoController from '../controllers/AlunoController';

const router = new express.Router();

router.get('/', alunoController.index);

export default router;
