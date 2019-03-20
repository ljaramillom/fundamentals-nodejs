var express = require('express')
var app = express()

app.get('/', function(req, res) {
    res.send('<b> Hola </b> <p> mundo </p>')
})

app.listen(3000)