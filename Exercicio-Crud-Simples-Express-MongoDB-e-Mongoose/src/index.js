const express = require('express')
const app = express()
const PORT = 3000
const mongoose = require('mongoose')
require('dotenv').config()

// Conexão com o MongoDB
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv:${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Minha-API`)
    .then(()=> console.log("Conectado ao mongoDB"))
    .catch(err => console.log("Erro ao conectar ao mongoDB", err))

// Middleware
app.use(express.json())

// DB Modelos
const Pessoa = mongoose.model('pessoa', {nome: String})

// Rotas
app.get('/', (req, res) =>{
    res.json("Hello")
})

// READ -> Buscar todas as pessoas
app.get('/pessoas', async (req, res) =>{
    const pessoas = await Pessoa.find()
    res.json(pessoas)
})

// READ -> Buscar pessoa pelo ID
app.get('/pessoas/:id', async (req, res) =>{
    const pessoa = await Pessoa.findById(req.params.id)
    res.json(pessoa)
})

// CREATE -> Adicionar pessoa
app.post('/pessoas', async (req, res) =>{
    const pessoa = new Pessoa({nome: req.body.nome})
    await pessoa.save()
    res.json(pessoa)
})

// UPDATE -> Atualizar pessoa
app.put('/pessoas/:id', async (req, res) =>{
    const pessoa = await Pessoa.findByIdAndUpdate(req.params.id, {nome: req.body.nome}, {new: true})
    res.json(pessoa)
})

// DELETE -> Excluir pessoa
app.delete('/pessoas/:id', async (req, res) =>{
    await Pessoa.findByIdAndDelete(req.params.id)
    res.json()
})



app.listen(PORT, ()=>{
    console.log(`Aplicação rodando na porta ${PORT}`)
})