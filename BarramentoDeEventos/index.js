const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json())


app.post('/eventos', async (req, res) => {
    const evento  = req.body

    try{
        await axios.post('http://localhost:4000/eventos', evento)
        await axios.post('http://localhost:5000/eventos', evento)
        res.status(200).end()
    }
    catch(e){
        res.status(500).end()
    }
   
})

app.listen(10000, () => {
    console.log('Barramento de eventos Porta 10000')
})