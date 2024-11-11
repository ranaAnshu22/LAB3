import express from 'express'

const app = express()
const Port = 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

/*
CRUD
*/


// app.route().get().put().delete().post();

app.route('/crud')
    .get((req,res) => {
        res.send('Welcome! The API is ready to work!')
    })
    .post((req,res) => {
        res.send('all done, go ahead!')
    })
    .put((req,res) => {
        res.send('The update is completed!')
    })
    .delete((req,res) => {
        res.send('done!')
    })

app.listen(Port, () => {
    console.log(`Example app listening on port http://localhost:${Port}`)
})