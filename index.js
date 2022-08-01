import express from 'express'

import usuarioRouter from './routes/usuarioRoute.js'

const app = express()

app.set('view engine', 'pug')
app.set('views', './views')

app.use('/', usuarioRouter)

const port = 3000

app.listen(
    port,
    console.log(`Server running on port ${port}`)
)