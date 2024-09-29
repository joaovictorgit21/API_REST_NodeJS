// Importação das depedencias do Express.JS
import express from 'express'
import routes from './routes.js'

// Variavel contante app que carrega o express.js
const app = express()

// Indicar para express ler body com json
app.use(express.json())

// Usar Router
app.use(routes)

// Exportação do código fonte
export default app