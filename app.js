const cors = require("cors")
const express = require("express");
// const res = require("express/lib/response");

const app = express ()
const PORT = process.env.PORT || 3001

app.use('/healthcheck', require('./routes/healthcheck.routes'));
app.use(express.urlencoded({extended: true}));
app.use(cors())

app.get("/", (req ,res)=>{
    headers={"http_status":200, "cache-control": "no-cache"}
    body={"status": "available"}
    res.status(200).send(body)
})
app.get("/highscore", (req, res)=>{
    headers = { http_status: 200, "cache-control": "no-cache" };
    body = [
        {
            "name": "Game",
            "points": "Points",
            "player": "Player",
        },
        {
            "name": "Tetris",
            "points": 56,
            "player": "Anna",
    
        },
        {
            "name": "Memory",
            "points": 50,
            "player": "Stina",
        },
        {
            "name": "Snake",
            "points": 48,
            "player": "Patrik",
        },
    ];
    res.set("Content-Type", "application/json");
    res.status(200).send(body);
});

app.listen(PORT , ()=>{
    console.log(`STARTED LISTENING ON PORT ${PORT}`)
});