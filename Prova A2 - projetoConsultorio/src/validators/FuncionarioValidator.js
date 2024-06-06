const yup = require('yup')

const schema = yup.object().shape({
    nome: yup
        .string('campo precisa ser uma texto')
        .required('campo obrigatório'),
    cpf: yup
        .string('campo precisa ser uma texto')
        .required('campo obrigatório'),
    email: yup
        .string('campo precisa ser uma texto')
        .email('E-mail inválido')
        .required('campo obrigatório'),
    telefone: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatório'),
    dataNascimento: yup
        .date('Data inválida')
        .required('campo obrigatório'),
    dataContratacao: yup
        .date('Data inválida')
        .required('campo obrigatório'),
    genero: yup
        .string('campo precisa ser um texto'),
    registroProfissional: yup
        .string('campo precisa ser um texto'),
    cargo: yup
        .string('campo precisa ser um texto'),
})

function funcionarioValidador(req, res, next) {
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

const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email('E-mail inválido')
        .required('Campo e-mail obrigatório'),
    senha: yup
        .string('Campo senha precisa ser preenchido no formato')
        .required('Campo senha obrigatório')
})

function loginValidador(req, res, next) {
    loginSchema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(e => {
            const errors = e.inner.map(e => {
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

async function checarToken(req, res, next) {
    try {
        const authorizationHeader = req.get('Authorization')
        const separator = authorizationHeader.split(' ')
        const token = separator[1]

        jwt.verify(token, JWT_SECRET)
        next()
    } catch (error) {
        return res.status(401).json({ mensagem: "Token inválido" })
    }
}

module.exports = {
    funcionarioValidador,
    loginValidador,
    checarToken
}