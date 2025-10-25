import express from 'express'

const app = express()
const port = 8000

// app.get('/about-us', (req, res)=>{
//     res.send("Hello World , About Us Somnath Aditya")
// })

// app.get('/', (req, res)=>{
//     res.send("Somnath Aditya")
// })

app.listen(port, () => {
    console.log(`server running at port ${port}`)
})