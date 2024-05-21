const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        senha: {
            type: String,
            required: true
        },
 }
)

const Usuario = mongoose.model('funcionario', schema)

module.exports = Funcionario

        
    {
        timestamps: true
    }

const Funcionario = mongoose.model('funcionario', schema)

module.exports = Funcionario