const express = require("express");

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

app.listen(80, () => {
    console.log(`listening on port 80`);
});