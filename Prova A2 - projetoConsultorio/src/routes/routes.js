const express = require('express')
const router = express.Router()

// controllers
const CargoController = require('../controllers/CargoController')
const ConsultaController = require('../controllers/ConsultaController')
const FuncionarioController = require('../controllers/FuncionarioController')
const PacienteController = require('../controllers/PacienteController')
const PagamentoController = require('../controllers/PagamentoController')

// validators
const { validarId } = require('../validators/IdValidator')
const { cargoValidador } = require('../validators/CargoValidator')
const { consultaValidador } = require('../validators/ConsultaValidator')
const { funcionarioValidador } = require('../validators/FuncionarioValidator')
const { pacienteValidador } = require('../validators/PacienteValidator')
const { pagamentoValidador } = require('../validators/PagamentoValidator')

// Cargos
router.post('/cargos', cargoValidador, CargoController.create)
router.get('/cargos', CargoController.getAll)
router.get('/cargos/:id', validarId, CargoController.getById)
router.put('/cargos/:id', validarId, CargoController.update)
router.delete('/cargos/:id', validarId, CargoController.remove)

// Consultas
router.post('/consultas', consultaValidador, ConsultaController.create)
router.get('/consultas', ConsultaController.getAll)
router.get('/consultas/:id', validarId, ConsultaController.getById)
router.put('/consultas/:id', validarId, ConsultaController.update)
router.delete('/consultas/:id', validarId, ConsultaController.remove)

// Funcionarios
router.post('/funcionarios', funcionarioValidador, FuncionarioController.create)
router.get('/funcionarios', FuncionarioController.getAll)
router.get('/funcionarios/:id', validarId, FuncionarioController.getById)
router.put('/funcionarios/:id', validarId, FuncionarioController.update)
router.delete('/funcionarios/:id', validarId, FuncionarioController.remove)

// Pacientes
router.post('/pacientes', pacienteValidador, PacienteController.create)
router.get('/pacientes', PacienteController.getAll)
router.get('/pacientes/:id', validarId, PacienteController.getById)
router.put('/pacientes/:id', validarId, PacienteController.update)
router.delete('/pacientes/:id', validarId, PacienteController.remove)

// Pagamentos
router.post('/pagamentos', pagamentoValidador, PagamentoController.create)
router.get('/pagamentos', PagamentoController.getAll)
router.get('/pagamentos/:id', validarId, PagamentoController.getById)
router.put('/pagamentos/:id', validarId, PagamentoController.update)
router.delete('/pagamentos/:id', validarId, PagamentoController.remove)






module.exports = router