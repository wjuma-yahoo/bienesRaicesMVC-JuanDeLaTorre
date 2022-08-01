import express from 'express'
const router = express.Router()

import { formularioLoging, registro } from '../controllers/usuarioController.js'

router.get('/login',  formularioLoging)
router.get('/registro',  registro)

export default router