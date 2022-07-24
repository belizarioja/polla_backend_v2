import { Router } from 'express'
import { getSedes, createSede, updateSede } from '../controllers/sede.controller'

const router = Router();

router.route('/')
    .get(getSedes)
    .post(createSede);

router.route('/:postId')
    .put(updateSede);

export default router;