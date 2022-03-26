const { text } = require('express')
const express = require('express')
const app = express()
//criamos um middleware
//npm faker
app.use(express.json())// possibilita o uso do req.body

app.use((req,res,next)=>{
    console.log("oi")
    next()
})

////////////////

const lembretes = {}
var contador = 0


//exemplo.com/lembretes
//GET

app.get('/lembretes', (req,res) => {
    res.send(lembretes)
})

//POST

app.post('/lembretes', (req,res) => {
    contador++
    //{texto: "fazer cafe"}
    const { texto } = req.body
    lembretes[contador] = {contador,texto}
    res.status(201).send(lembretes[contador])
})

app.listen(4000, ()=> {
    console.log('Lembretes, Porta 4000')
})