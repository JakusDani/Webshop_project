const express = require('express');
const bodyParser = require('body-parser');
const ejs = require("ejs");

const app = express();

app.use(bodyParser.json());

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send("Hello")
});




app.listen(port, () => {
    console.log("A szerver fut a(z): " + port + " porton");
});