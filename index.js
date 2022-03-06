const express = require("express");
const path = require('path');

const app = express();

app.use(express.static("static"));

app.use(express.urlencoded({
    extended: true
}));

app.post("/login", (req, res) => {
    res.json({
        message: "Hello API"
    });
});

app.get("/main-menu", (req, res) => {
    res.sendFile( __dirname + "/static/" + "index.html" );
});

app.get("/algorithm-select", (req, res) => {
    res.sendFile( __dirname + "/static/" + "/pages/" + "algorithm-select.html" );
});

app.get("/level-select", (req, res) => {
    res.sendFile( __dirname + "/static/" + "/pages/" + "level-select.html" );
});

app.get("/level-1", (req, res) => {
    res.sendFile( __dirname + "/static/" + "/pages/" + "/levels/" + "level-1.html" );
});

app.get("/level-2", (req, res) => {
    res.sendFile( __dirname + "/static/" + "/pages/" + "/levels/" + "level-2.html" );
});

app.get("/level-3", (req, res) => {
    res.sendFile( __dirname + "/static/" + "/pages/" + "/levels/" + "level-3.html" );
});

app.get("/level-4", (req, res) => {
    res.sendFile( __dirname + "/static/" + "/pages/" + "/levels/" + "level-4.html" );
});

app.listen(80, () => {
    console.log(`listening on port 80`);
});