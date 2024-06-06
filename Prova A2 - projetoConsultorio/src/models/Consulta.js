const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        dataConsulta: {
            type: Date,
            required: true
        },
        horaConsulta: {
            type: String,
            required: true
        },
        statusConsulta: {
            type: String,
            required: true
        },
        funcionario: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'funcionario',
            required: false
        },
        paciente: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'paciente',
            required: false
        },
    },
    {
        timestamps: true
    }
)

const Consulta = mongoose.model('consulta', schema)

module.exports = Consulta