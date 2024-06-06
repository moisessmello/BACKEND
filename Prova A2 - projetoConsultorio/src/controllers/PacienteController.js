const Paciente = require('../models/Paciente')

async function create(req, res) {
    const paciente = new Paciente(req.body)
    const pacienteCriado = await paciente.save()
    res.status(201).json(pacienteCriado)
}

async function getAll(req, res) {
    res.json(await Paciente.find())
}

async function getById(req, res) {
    const paciente = await Paciente.findById(req.params.id)
    if (paciente) {
        res.json(paciente)
    } else {
        res.status(404).json({ mensagem: "Paciente não encontrado!" })
    }
}

async function update(req, res) {
    const pacienteAtualizado = await Paciente.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (pacienteAtualizado) {
        res.json(pacienteAtualizado)
    } else {
        res.status(404).json({ mensagem: "Paciente não encontrado!" })
    }

}

async function remove(req, res) {
    const pacienteExcluido = await Paciente.findByIdAndDelete(req.params.id)
    if (pacienteExcluido) {
        res.json({
            mensagem: "Paciente excluido com sucesso!",
            pacienteExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Paciente não encontrado!" })
    }
}


module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}