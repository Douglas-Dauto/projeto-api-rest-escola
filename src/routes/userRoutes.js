import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', userController.store);
router.get('/', loginRequired, userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/**
    Um controller deve ter apenas 5 métodos.

    index -> Lista todos os usuários -> GET
    store ou create -> Cria um usuário - POST
    delete -> Apaga um usuário -> DELETE
    show -> Mostra um usuário -> GET
    update -> Atualiza um usuário -> PATCH ou PUT
*/
