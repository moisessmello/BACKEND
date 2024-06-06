const Consulta = require('../models/Consulta')

async function create(req, res) {
    const consulta = new Consulta(req.body)
    const consultaCriada = await consulta.save()
    res.status(201).json(consultaCriada)
}

async function getAll(req, res) {
    res.json(await Consulta.find().populate(['funcionario', 'paciente']))
}

async function getById(req, res) {
    const consulta = await Consulta.findById(req.params.id).populate(['funcionario', 'paciente'])
    if (consulta) {
        res.json(consulta)
    } else {
        res.status(404).json({ mensagem: "Consulta não encontrada!" })
    }
}

async function update(req, res) {
    const consultaAtualizada = await Consulta.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (consultaAtualizada) {
        res.json(consultaAtualizada)
    } else {
        res.status(404).json({ mensagem: "Consulta não encontrada!" })
    }

}

async function remove(req, res) {
    const consultaExcluida = await Consulta.findByIdAndDelete(req.params.id)
    if (consultaExcluida) {
        res.json({
            mensagem: "Consulta excluida com sucesso!",
            consultaExcluida
        })
    } else {
        res.status(404).json({ mensagem: "Consulta não encontrada!" })
    }
}


module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}