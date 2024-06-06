const yup = require('yup')

const schema = yup.object().shape({
    
    dataConsulta: yup
        .date('Data inválida'),
    horaConsulta: yup
        .string('campo precisa ser um texto'),
    statusConsulta: yup
        .string('campo precisa ser um texto'),
    funcionario: yup
        .string('campo precisa ser um texto'),
    paciente: yup
        .string('campo precisa ser um texto'),

})

function consultaValidador(req, res, next) {
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
    consultaValidador
}