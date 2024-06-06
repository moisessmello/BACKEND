const Cargo = require('../models/Cargo')

async function create(req, res) {
    
    const { nome, descricao, salario, cargaHoraria, dataCriacao } = req.body
    const cargo = new Cargo(req.body)
    const cargoCriado = await cargo.save()
    res.status(201).json(cargoCriado)
}

async function getAll(req, res) {
    // #swagger.tags = ['Cargos']
    res.json(await Cargo.find())
}

async function getById(req, res) {
    // #swagger.tags = ['Cargos']
    const cargo = await Cargo.findById(req.params.id)
    if (cargo) {
        res.json(cargo)
    } else {
        res.status(404).json({ mensagem: "Cargo não encontrato!" })
    }
}

async function update(req, res) {
    const cargoAtualizado = await Cargo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (cargoAtualizado) {
        res.json(cargoAtualizado)
    } else {
        res.status(404).json({ mensagem: "Cargo não encontrato!" })
    }

}

async function remove(req, res) {
    const cargoExcluido = await Cargo.findByIdAndDelete(req.params.id)
    if (cargoExcluido) {
        res.json({
            mensagem: "Cargo excluido com sucesso!",
            cargoExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Cargo não encontrato!" })
    }
}


module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}