const express = require('express');
const bodyParser = require('body-parser');
const ejs = require("ejs");
var mysql = require('mysql');


const app = express();

app.use(bodyParser.json());

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const port = process.env.PORT || 3000;

var con = mysql.createConnection({
    connectLimit: 100,
    host: "eu-cdbr-west-03.cleardb.net",
    port: 3306,
    user: "ba2c246aa2f71f",
    password: "a3ace454",
    database: "heroku_5c093801d94f4f0",
    connectionTimeout: 15000,
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT * FROM users", function (err, result) {
        if (err) throw err;
        console.log("Query completed!");
    });
});

// con.connect((err) => {
//     if (err) throw err;
//     console.log("Connected to database!");
// });

app.get('/', (req, res) => {
    res.render("index")
});



app.listen(port, () => {
    console.log("The server is running on the port " + port);
});