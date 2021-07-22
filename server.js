// require('dotenv').config()

const express = require('express')
const app = express()

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ssadmin:ssVjn2kFbEFnvGttr@jcluster.z4eiq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true } )
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('connected to databse'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers',subscribersRouter)

app.listen(4000, () => console.log('Server Started'))