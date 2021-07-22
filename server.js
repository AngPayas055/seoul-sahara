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


const notesSchema = {
    name: String,
    phone: String,
    email: String,
    message: String
}

const Note = mongoose.model("Note", notesSchema)

app.get("/", function(req, res){
    res.send("express isworking")
})

app.post("/", function(req, res){
    let newNote = new Note ({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        message: req.body.message
    })
    newNote.save();
    res.redirect('/')
})  

app.listen(4000, () => console.log('Server Started'))