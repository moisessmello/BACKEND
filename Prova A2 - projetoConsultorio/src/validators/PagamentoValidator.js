const yup = require('yup')

const schema = yup.object().shape({
    
    valor: yup
        .date('Data inválida')
        .required('campo obrigatório'),
    formaPagamento: yup
        .string('campo precisa ser um texto'),
    statusPagamento: yup
        .string('campo precisa ser um texto'),
    dataPagamento: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatório'),
    consulta: yup
        .string('campo precisa ser um texto'),

})

function pagamentoValidador(req, res, next) {
    schema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            console.log(err)
            const errors = err.inner.map(e => {
                const erro = {
                    campo: e.path,
                    erros: e.errors
                }
                return erro
            })
            res.status(400).json(
                {
                    mensagem: "Falha na validação dos campos",
                    erros: errors
                }
            )
        })
}

module.exports = {
    pagamentoValidador
}