import express from 'express'
import { dbConnect } from './src/config/dbConnect.js'
import todoRoute from './src/routes/todoRoute.js'

const app = express()
const port = 9000

app.use(express.json())
app.use('/', todoRoute)

dbConnect()
app.listen(port, () => {
    console.log(`server running at port ${port}`)
})


// server - dbConnect - model(schema) - controllers(function) - routes- server