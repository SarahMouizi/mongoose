const express = require ('express')
const connectdb = require('./config/connectdb')
const ContactRouter = require('./route/contact')
const app = express()

const port = process.env.port

require('dotenv').config()



app.use(express.json())
app.use('/api/user', ContactRouter)
//appel database
connectdb()

app.listen(process.env.port, err => {
    err?console.log(err): console.log(`go to the port ${process.env.port}`)
})