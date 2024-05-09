const CargoModel = require('../models/Cargo')

//métodos
async function create(req, res) {
    try{
        const cargo = new Cargo(req.body)
        const cargoCriado = await cargo.save()
        res.status(201).json(cargoCriado)
    } catch (erro) {
        console.error("Erro ao criar cargo: ", error)
        res.status(401).json({
            mensagem: "Erro ao cria cargo!",
            error: error.message
        })

    }
}




module.exports = {
    create
}