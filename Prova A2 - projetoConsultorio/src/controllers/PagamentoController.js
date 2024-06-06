const Pagamento = require('../models/Pagamento');
const Consulta = require('../models/Consulta');
const Paciente = require('../models/Paciente');
const Funcionario = require('../models/Funcionario');
const nodemailer = require('nodemailer')
require('dotenv').config(); // Carrega variáveis de ambiente do arquivo .env

async function create(req, res) {
    const pagamento = new Pagamento(req.body);
    const pagamentoCriado = await pagamento.save();
    res.status(201).json(pagamentoCriado);

    //Regra para eu pegar o email do funcionario e paciente
    const consultaBuscada = await Consulta.findById(req.body.consulta);
    console.log(consultaBuscada)

    const pacienteBuscado = await Paciente.findById(consultaBuscada.paciente)
    console.log(pacienteBuscado)

    const funcionarioBuscado = await Funcionario.findById(consultaBuscada.funcionario)
    console.log(funcionarioBuscado);

    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })

    transporter.sendMail({
        from: funcionarioBuscado.email,
        to: pacienteBuscado.email,
        subject: "Consulta marcada com sucesso!",
        text: "Sua consulta foi marcada com sucesso, não esqueça do seu horario e nem que é seu psicólogo"
    })
}

async function getAll(req, res) {
    res.json(await Pagamento.find().populate(['consulta']))
}

async function getById(req, res) {
    const pagamento = await Pagamento.findById(req.params.id).populate(['consulta'])
    if (pagamento) {
        res.json(pagamento)
    } else {
        res.status(404).json({ mensagem: "Pagamento não encontrado!" })
    }
}

async function update(req, res) {
    const pagamentoAtualizado = await Pagamento.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (pagamentoAtualizado) {
        res.json(pagamentoAtualizado)
    } else {
        res.status(404).json({ mensagem: "Pagamento não encontrado!" })
    }

}

async function remove(req, res) {
    const pagamentoExcluido = await Pagamento.findByIdAndDelete(req.params.id)
    if (pagamentoExcluido) {
        res.json({
            mensagem: "Pagamento excluido com sucesso!",
            pagamentoExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Pagamento não encontrada!" })
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}