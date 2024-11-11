import express from 'express'

//need to import json data
import mobiles from './data/mobile.json' assert {type: 'json'}
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/mobiles', (req, res) => {
    res.json(mobiles)
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})