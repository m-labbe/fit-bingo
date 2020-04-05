import express from 'express'
import {get, getAll, create} from '../controllers/user'
const router = express.Router()

router.get('/', getAll)

router.post('/create', create)

router.get('/:id', get)

export default router