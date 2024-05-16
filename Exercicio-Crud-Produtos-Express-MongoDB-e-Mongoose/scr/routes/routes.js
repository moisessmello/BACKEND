const express = require('express')
const router = express.Router()

const ProdutoController = require('../controllers/Produto.Controller')


router.get('/', (req, res) =>{
    res.json("Ok")
})


// Rotas

router.get('/produtos', ProdutoController.getAll)
router.post('/produtos', ProdutoController.create)
router.get('/produtos/:id', ProdutoController.getById)
router.put('/produtos/:id', ProdutoController.update)
router.delete('/produtos/:id', ProdutoController.deleteProduct)


module.exports = router