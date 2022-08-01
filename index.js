import express from 'express'

const app = express()

app.get('/', function(req, res) {
    res.json('Hola mundo desde express!')
})

app.get('/nosotros', function(req, res) {
    res.json({
        ok: true,
        message: 'Sobre nosotros'
    })
})


const port = 3000

app.listen(
    port,
    console.log(`Server running on port ${port}`)
)