var express = require('express')
var apiRoute = require('./routes/auth')
var mongoose = require('mongoose')
var cors = require('cors')

const app = express()
const port = 3000

mongoose.connect('mongodb+srv://biju:bijuborahkvcut@cluster0.q8aelky.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connect to DB')
})

app.use(express.json(), cors())

app.use('/api', apiRoute)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Backend running on port : ${port}`)
})
