const express = require ('express')
const router = express.Router()

const AutenticacaoController = require('../controllers/AutenticacaoControler')

const { usuarioValidador} = require('../validators/AutenticacaoValidators')

router.post('/auth/registor', autenticacaoValidator, AutenticacaoController.registrar)

router.post('/auth/login', loginValidator.AutenticacaoController.login)



module.exports = router