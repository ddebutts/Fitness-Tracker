const express = require('express');
const app = express()
const PORT = 8000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.use(require('./routes'))

const mongoose = require('mongoose')
const URI = "mongodb://localhost/workouts_db"
mongoose.connect(URI)

app.listen(PORT, function(){
    console.log("Listening on PORT: ", PORT)
})