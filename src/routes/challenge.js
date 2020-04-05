import express from 'express'
import { get, create } from '../controllers/challenge'
const router = express.Router()

router.get('/:id', get)

router.post('/create', create)

export default router
