import { Router } from 'express'
import { createJugada, getJugadas, deleteJugada, updateJugada } from '../controllers/jugada.controller'

const router = Router();

router.route('/')
    .post(createJugada);

router.route('/:id')
    .get(getJugadas)
    .delete(deleteJugada)
    .put(updateJugada);

export default router;