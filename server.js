const express = require('express')
const morgan = require('morgan')    
const cors = require('cors')
const routeClientes = require('./src/routes/clienteRoutes')

const app = express()   

app.use(cors())
app.use(morgan('dev'))
app.use(express.json());

app.use(routeClientes)
    
app.listen(4600)
console.log('server on port 4600')
