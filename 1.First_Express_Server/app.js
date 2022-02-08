// import Express
const express = require("express");

// instantiated instance
const app = express();

// line 2, 5 as one
// const app = require("express")();

// allow us to parse json
app.use(express.json());

// callback function = ("endpoint", () => {});
// "at this endpoint, do this"
// The client 'req'uests, the server 'res'ponds
app.get("/", (req, res) => {
    res.send({message:"we did it!" });
});

app.post("/welcome", (req, res) => {
    res.send({message:"Welcome!"});
});

app.post("/mirror", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

// keep at the bottom of the file
app.listen(8080);