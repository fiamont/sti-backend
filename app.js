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

app.get("/fastestPlayer", (req, res)=>{
    headers = { http_status: 200, "cache-control": "no-cache" };
    body = [
        {
            "level": "Level 1",
            "time": 1.5,
            "player": "Robert",
            "image": "https://openclipart.org/image/400px/22124"
        },
        {
            "level": "Level 2",
            "time": 2.3,
            "player": "Stina",
            "image": "https://openclipart.org/image/400px/22129"
        },
        {
            "level": "Level 3",
            "time": 2.8,
            "player": "Patrik",
            "image": "https://openclipart.org/image/400px/22232"
        }
    ];
    res.set("Content-Type", "application/json");
    res.status(200).send(body);
});

app.get("/levelOne", (req, res)=>{
    headers = { http_status: 200, "cache-control": "no-cache" };
    body = [
        {
            "name": "Cat",
            "image": "https://openclipart.org/image/400px/227472"
        },
        {
            "name": "Dino",
            "image": "https://openclipart.org/image/400px/314119"
        },
        {
            "name": "Frog",
            "image": "https://openclipart.org/image/400px/169932"
        },
        {
            "name": "Hippo",
            "image": "https://openclipart.org/image/400px/22337"
        },
        {
            "name": "Honeybee",
            "image": "https://openclipart.org/image/400px/191898"
        },
        {
            "name": "Lion",
            "image": "https://openclipart.org/image/400px/335742"
        }
    ];
    res.set("Content-Type", "application/json");
    res.status(200).send(body);
});

app.get("/levelTwo", (req, res)=>{
    headers = { http_status: 200, "cache-control": "no-cache" };
    body = [
        {
            "name": "Butterfly",
            "image": "https://openclipart.org/image/400px/281767"
        },
        {
            "name": "Dog",
            "image": "https://openclipart.org/image/400px/17692"
        },
        {
            "name": "Dolphin",
            "image": "https://openclipart.org/image/400px/300661"
        },
        {
            "name": "Frog",
            "image": "https://openclipart.org/image/400px/169932"
        },
        {
            "name": "Hippo",
            "image": "https://openclipart.org/image/400px/22337"
        },
        {
            "name": "Honeybee",
            "image": "https://openclipart.org/image/400px/191898"
        },
        {
            "name": "Lion",
            "image": "https://openclipart.org/image/400px/335742"
        },
        {
            "name": "Mouse",
            "image": "https://openclipart.org/image/400px/17558"
        },
        {
            "name": "Owl",
            "image": "https://openclipart.org/image/400px/168873"
        },
        {
            "name": "Zebra",
            "image": "https://openclipart.org/image/400px/314473"
        }
    ];
    res.set("Content-Type", "application/json");
    res.status(200).send(body);
});
app.get("/levelThree", (req, res)=>{
    headers = { http_status: 200, "cache-control": "no-cache" };
    body = [
        {
            "name": "Butterfly",
            "image": "https://openclipart.org/image/400px/281767"
        },
        {
            "name": "Cat",
            "image": "https://openclipart.org/image/400px/227472"
        },
        {
            "name": "Dino",
            "image": "https://openclipart.org/image/400px/314119"
        },
        {
            "name": "Dog",
            "image": "https://openclipart.org/image/400px/17692"
        },
        {
            "name": "Dolphin",
            "image": "https://openclipart.org/image/400px/300661"
        },
        {
            "name": "Elephant",
            "image": "https://openclipart.org/image/400px/83479"
        },
        {
            "name": "Frog",
            "image": "https://openclipart.org/image/400px/169932"
        },
        {
            "name": "Hippo",
            "image": "https://openclipart.org/image/400px/22337"
        },
        {
            "name": "Honeybee",
            "image": "https://openclipart.org/image/400px/191898"
        },
        {
            "name": "Horse",
            "image": "https://openclipart.org/image/400px/170851"
        },
        {
            "name": "Lion",
            "image": "https://openclipart.org/image/400px/335742"
        },
        {
            "name": "Mouse",
            "image": "https://openclipart.org/image/400px/17558"
        },
        {
            "name": "Owl",
            "image": "https://openclipart.org/image/400px/168873"
        },
        {
            "name": "Sloth",
            "image": "https://openclipart.org/image/400px/335271"
        },
        {
            "name": "Turtle",
            "image": "https://openclipart.org/image/400px/173367"
        },
        {
            "name": "Zebra",
            "image": "https://openclipart.org/image/400px/314473"
        }
    ];
    res.set("Content-Type", "application/json");
    res.status(200).send(body);
});

app.listen(PORT , ()=>{
    console.log(`STARTED LISTENING ON PORT ${PORT}`)
});