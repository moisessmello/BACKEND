const  mongoose = require('mongoose')


function validarId(req, res, next) {
    const isValid = mongoose.Types.ObjectId.isValid(req.params.id)
    if(isValid) {
        nexte()
    } else {
        res.status(400).json({mensagem: "id inválido"})
    }
}

module.exports = {
    validarId
}