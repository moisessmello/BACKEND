const express = require('express')
const router = express.Router()

const CargoController = require('../controllers/CargoController')
const FuncionarioController = require('../controllers/FuncionarioController')
const DepartamentoController = require('../controllers/DepartamentoController')

//Importando os Validators
const {departamentoValidador} = require('../validators/DepartamentoValidator')
const {validarId} = require('../validators/validarId')

// Cargos
router.post('/cargos', CargoController.create)
router.get('/cargos', CargoController.getAll)
router.get('/cargos/:id', validarId, CargoController.getById)
router.put('/cargos/:id', validarId, CargoController.update)
router.delete('/cargos/:id', validarId, CargoController.remove)

// Funcionarios1
router.post('/funcionarios', FuncionarioController.create)
router.get('/funcionarios', FuncionarioController.getAll)
router.get('/funcionarios/:id', validarId, FuncionarioController.getById)
router.put('/funcionarios/:id', validarId, FuncionarioController.update)
router.delete('/funcionarios/:id',validarId, FuncionarioController.remove)

// Departamentos
router.post('/departamentos', departamentoValidador, DepartamentoController.create)
router.get('/departamentos', DepartamentoController.getAll)
router.get('/departamentos/:id', validarId, DepartamentoController.getById)
router.put('/departamentos/:id', validarId, departamentoValidador, DepartamentoController.update)
router.delete('/departamentos/:id', validarId, DepartamentoController.remove)


module.exports = router