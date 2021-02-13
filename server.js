const express = require('express');
const bodyParser = require('body-parser');
const ejs = require("ejs");
const mysql = require('mysql');


const app = express();

app.use(bodyParser.json());

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const port = process.env.PORT || 3000;

const con = mysql.createConnection({
    host: "eu-cdbr-west-03.cleardb.net",
    user: "ba2c246aa2f71f",
    password: "a3ace454"
});

con.connect(err => {
    if (err) throw err;
    console.log("Connected to database!");
});

app.get('/', (req, res) => {
    res.render("index")
});



app.listen(port, () => {
    console.log("The server is running on the port " + port);
});