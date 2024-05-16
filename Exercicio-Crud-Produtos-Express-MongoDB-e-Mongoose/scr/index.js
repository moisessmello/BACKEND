const express = require('express')
const DBConnection = require('./db/connection')
const routes = require('./routes/routes')

const app = express()
const PORT = 3000

DBConnection()


app.use(express.json())

app.use(routes)






app.listen(PORT, () =>{
    console.log(`Aplicação rodando na pordta ${PORT}`)
})