const express = require('express');
const app = express()
const PORT = 8000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public')) // => '/' route

app.use(require('./routes'))

const mongoose = require('mongoose')
const URI = process.env.MONGODB_URI || "mongodb://localhost/workout"
mongoose.connect(URI, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
})

app.listen(PORT, function(){
    console.log("Listening on PORT: ", PORT)
})