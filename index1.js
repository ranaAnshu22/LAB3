import express from 'express'
const app = express()
const port = 5000

app.get('/',(req,res) => {
    res.send(`<h1>Group 7:</h1>
                <h2>Jaismen Jaismeen, Anshul Rana</h2>`)
})

app.listen(port,() => {
    console.log(`Example app listening on port http://localhost:${port}`)
})