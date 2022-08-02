import express from 'express'
const router = express.Router()

import { formularioLoging, registro, fomularioOlvidePassword } from '../controllers/usuarioController.js'

router.get('/login',  formularioLoging)
router.get('/registro',  registro)
router.get('/olvide-password',  fomularioOlvidePassword)

export default router