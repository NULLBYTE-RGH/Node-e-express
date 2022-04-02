const express = require('express')
const axios = require('axios')

const app = express()
app.use(express.json())


const lembretes = {}
contador = 0
//GET
//exemplo.com.br/lembretes
app.get('/lembretes', (req, res) => {
    res.send(lembretes)
})
 
//POST
//exemplo.com.br/lembretes
app.post('/lembretes', async (req, res) => {
    contador++
    //{texto: "Fazer café"}
    try{
    const { texto } = req.body
    await axios.post("http://localhost:10000/eventos", {
        tipo: "lembrete criado",
        dados:{
            contador,texto
        }
    })
    
    res.status(201).send(lembretes[contador])
}
    catch (e){
    console.log(e)
}
})



app.listen(4000, () => {
    console.log("Lembretes. Porta 4000.")
})

