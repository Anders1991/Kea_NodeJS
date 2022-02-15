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
    const input = JSON.stringify(req.body);
    const CreateBeerId = '{"BeerId":' + LastBeerId + ",";
    const JsonBeer = JSON.parse(JSON.stringify(CreateBeerId)); 
    const NewBeer = JsonBeer + input.replace("{", " "); 
    Data.push(JSON.parse(NewBeer));

    res.send('Beer added: ' + NewBeer);
    
});

// update beer by id
app.put("/id", (req, res) => {

    // meaning "one or more digits"
    let regExpression = /\d+/;


    const Input = req.body;
    let StringifyInput = JSON.stringify(Input);

    // find the id of the beer
    let OldBeerId = StringifyInput.match(regExpression);
    let i = 1;
    let BeerId = OldBeerId-i;

    // find old beer data
    let BeerInfo = JSON.stringify(Data[BeerId]);

    // update beer
    Data.splice(BeerId, 1, Input);


     res.send('Beer type: ' + BeerInfo + " updated to: " + StringifyInput);
     console.log(Data);

});

/* delete last beer
app.delete("/", (req, res) => {
 
    beerId = req.body;
    Data.pop();

    res.send('Beer deleted!');
});
*/

// delete beer by id
app.delete("/id", (req, res) => {
    
    
    let Input = req.body;
    const ParsedId = parseInt(Input-1);
    // find value of index
    let BeerInfo = JSON.stringify(Data[ParsedId]);

    // Delete beer
    Data.splice(ParsedId, 1);
    console.log(Data);
    res.send(BeerInfo + ' deleted!');
});


// keep at the bottom of the file
app.listen(8080);