import { Router } from 'express'
import { getUsuarios, getRoles, getLogin, createUsuario, updateUsuario } from '../controllers/usuario.controller'

const router = Router();

router.route('/')
    .get(getUsuarios)
    .post(createUsuario);

router.route('/:postId')
    .put(updateUsuario);
/* .get(getUsuario)
.delete(deleteUsuario) */


router.route('/rol')
    .get(getRoles);

router.route('/login')
    .post(getLogin);


export default router;