import { Router } from 'express'
import { getJornadas, updateJornada, createJornada, getJornadasActivas } from '../controllers/jornada.controller'

const router = Router();

router.route('/')
    .post(createJornada);

router.route('/:id')
    .get(getJornadas)
    .put(updateJornada);

router.route('/activas/:id')
    .get(getJornadasActivas);

export default router;