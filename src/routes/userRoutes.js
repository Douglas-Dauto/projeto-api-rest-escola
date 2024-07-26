import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir em uma aplicação real
// router.get('/', loginRequired, userController.index);
// router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/**
    Um controller deve ter apenas 5 métodos.

    index -> Lista todos os usuários -> GET
    store ou create -> Cria um usuário - POST
    delete -> Apaga um usuário -> DELETE
    show -> Mostra um usuário -> GET
    update -> Atualiza um usuário -> PATCH ou PUT
*/
