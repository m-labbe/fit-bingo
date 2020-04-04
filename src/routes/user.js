import express from 'express'
import {test, create} from '../controllers/user'
const router = express.Router()

router.get('/', test)

router.post('/create', create)

export default router