var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var cors = require("cors");
app.use(cors())
app.use(bodyParser())

const cars = [{
    carName: "BMW",
    registrationNumber: 2423434
}]



app.get('/cars', function (req, res) {
    res.send(cars)
})

app.post("/addedCars", function (req, res) {
    console.log(req.body);
    cars.push(req.body);
    res.send(201);
})















app.listen(5000, function () {
    console.log("listening")
})

