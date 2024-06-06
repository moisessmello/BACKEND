const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        valor: {
            type: Number,
            required: true
        },
        formaPagamento: {
            type: String,
            required: true
        },
        statusPagamento: {
            type: String,
            required: true
        },
        dataPagamento: {
            type: Date,
            required: true
        },
        consulta: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'consulta',
            required: false
        },
    },
    {
        timestamps: true
    }
)

const Pagamento = mongoose.model('pagamento', schema)

module.exports = Pagamento