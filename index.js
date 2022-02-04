const express = require("express");

const API_PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.post("/login", (req, res) => {
    res.json({
        message: "Hello API"
    });
});

app.listen(API_PORT, () => {
    console.log(`listening on port ${API_PORT}`);
});