import express from 'express'
import apiRoute from './routes/api'

const app = express()
const port = 3000

app.use('/api', apiRoute)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console(`Backend running on port : ${port}`)
})
