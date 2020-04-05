import express from 'express'
import { getAll, get, create } from '../controllers/challenge'
const router = express.Router()

router.get('/', getAll)

router.get('/:id', get)

router.post('/create', create)

export default router
