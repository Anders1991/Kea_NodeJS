// import Express
const { json } = require("express");
const express = require("express");
// const bodyParser = require('body-parser');

// instantiated instance
const app = express();

// allow us to parse json
app.use(express.json());

// Configuring body parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// Create Array 
const Data = [{"BeerId":1,"BeerType":"Pilsner"},{"BeerId":2,"BeerType":"Lager"}];

// "at this endpoint, do this"
// The client 'req'uests, the server 'res'ponds

// Get all beers
app.get("/", (req, res) => {
    res.send(Data);
});

// Get beer by id
app.get("/id", (req, res) => {

    GetNewBeerId = req.body -1;
    res.send(Data[GetNewBeerId])
});

//Create beer
app.post("/", (req, res) => {
    const i = 1;
    let LastBeerId = Data.length + i;
    const CreateBeerId = '{"BeerId":' + LastBeerId + '}';
    const NewBeer = JSON.parse(JSON.stringify(CreateBeerId)); 
    const JsonBeer = NewBeer + "," + JSON.stringify(req.body); 
    Data.push(JsonBeer);

    res.send('Beer added: ' + JsonBeer);
    
});

// update beer by id
app.get("/id", (req, res, BeerId) => {
    BeerId = req.body;

});

// delete beer
app.delete("/", (req, res) =>{
 
    beerId = req.body;
    Data.pop();

    res.send('Beer deleted!');
});

// keep at the bottom of the file
app.listen(8080);