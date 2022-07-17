import express from 'express';
import userController from '../controllers/UserController';

const router = new express.Router();

router.post('/', userController.store);

export default router;

/*
index -> lista todos usuarios -> GET
store ou create -> cria um novo usuario -> POST
delete -> apaga um usuario -> DELETE
show -> mostra um usuario -> GET
update -> atualiza um usuario -> PATCH ou PUT
*/
