const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
// exercicio 1
const MY_VAR = process.env.MY_VAR;
const MESSAGE = process.env.MESSAGE;
app.get('/', (req, res) => res.send(`Está vivo!!! ${MESSAGE}`))
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))