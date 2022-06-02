const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
// exercicio 1
const MY_VAR = process.env.MY_VAR;
app.get('/', (req, res) => res.send(`Está vivo!!! ${MY_VAR}`))
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))