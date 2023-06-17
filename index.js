var express = require('express')
var apiRoute = require('./routes/api')
var mongoose = require('mongoose')

const app = express()
const port = 3000

app.use('/api', apiRoute)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

mongoose.connect('mongodb+srv://biju:bijuborahkvcut@cluster0.q8aelky.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Connected to DB')
})

app.listen(port, () => {
    console(`Backend running on port : ${port}`)
})
