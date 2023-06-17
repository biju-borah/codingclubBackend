var express = require('express')
var apiRoute = require('./routes/api')

const app = express()
const port = 3000

app.use('/api', apiRoute)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console(`Backend running on port : ${port}`)
})
