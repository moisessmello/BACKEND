const Produto = require('../models/produtos')


async function getAll(req, res){
    const produtos = await Produto.find()
    res.json(produtos)
}


async function create( req, res){
        try{
            const produto = new Produto(req.body)
            const produtoCriado = await produto.save()
            res.status(201).json(produtoCriado)
        }
        catch (error){
            console.log(error)
            res.status(500).json(
                {
                    mensagem: "Ocorreu um erro ao cadastrar produto",
                    error: error

                }
            )
        }
   
}

async function getAll(req, res){
    const produtos = await Produto.find()
    res.json(produtos)
}


async function create( req, res){
        try{
            const produto = new Produto(req.body)
            const produtoCriado = await produto.save()
            res.status(201).json(produtoCriado)
        }
        catch (error){
            console.log(error)
            res.status(500).json(
                {
                    mensagem: "Ocorreu um erro ao cadastrar produto",
                    error: error

                }
            )
        }
   
}

async function getById(req, res) {
    try {
        const produto = await Produto.findById(req.params.id);
        if (!produto) {
            return res.status(404).json({ mensagem: "Produto não encontrado" });
        }
        res.json(produto);
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensagem: "Ocorreu um erro ao buscar o produto", error: error });
    }
}

async function update(req, res) {
    try {
        const { nome, tipo, preco, tag } = req.body;
        if (!nome || !tipo || !preco || !tag) {
            return res.status(400).json({ mensagem: "Todos os campos são obrigatórios" });
        }
        const produto = await Produto.findByIdAndUpdate(req.params.id, { nome, tipo, preco, tag }, { new: true });
        if (!produto) {
            return res.status(404).json({ mensagem: "Produto não encontrado" });
        }
        res.json(produto);
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensagem: "Ocorreu um erro ao atualizar o produto", error: error });
    }
}

async function deleteProduct(req, res) {
    try {
        await Produto.findByIdAndDelete(req.params.id);
        res.json({ mensagem: "Produto deletado com sucesso" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: "Ocorreu um erro ao deletar o produto", error: error });
    }
}

module.exports = {
    getAll,
    create,
    getById,
    update,
    deleteProduct
};