const express = require('express');
const {v4: uuidv4} = require('uuid')
const app = express();
app.use(express.json())


const observacoesPorLembreteId = {}

//POST
//host:porta/lembretes/123456/observacoes
app.post('/lembretes/:id/observacoes', (req, res) => {

    const idObs = uuidv4()
    //const texto = req.body.texto
    const {texto}=req.body
    const observacoesDoLembre = observacoesPorLembreteId[req.params.id] || []
    // if (observacoesDoLembre === undefined)
    // observacoesDoLembre = [];

    observacoesDoLembre.push({id: idObs, texto: texto})

    observacoesPorLembreteId[req.params.id] = observacoesDoLembre

    res.status(201).send(observacoesDoLembre)
    
})

//GET
app.get('/lembretes/:id/observacoes', (req, res) => {

})

app.listen(5000, () => {
    console.log('Observacoes. Porta 5000.')
})