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

app.get("/algorithm-select", (req, res) => {
    res.sendFile( __dirname + "/pages/" + "algorithm-select.html" );

});



app.listen(80, () => {
    console.log(`listening on port 80`);
});