import { Router } from 'express'
import { getResultados, updateResultado, createResultado, deleteResultado } from '../controllers/resultado.controller'

const router = Router();

router.route('/')
    .post(createResultado);

router.route('/:id')
    .get(getResultados)
    .put(updateResultado)
    .delete(deleteResultado);

export default router;