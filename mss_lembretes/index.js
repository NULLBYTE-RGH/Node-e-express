const express = require('express')

const app = express()

//exemplo.com/lembretes
//GET

app.get('/lembretes', (req,res) => {

})

//POST

app.post('/lembretes', (req,res) => {

})

app.listen(4000, ()=> {
    console.log('Lembretes, Porta 4000')
})