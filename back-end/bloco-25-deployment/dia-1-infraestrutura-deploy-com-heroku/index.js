const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
// exercicio 1
app.get('/', (req, res) => res.send("Está vivo!!!"))
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))