const cors = require("cors")
const express = require("express");
// const res = require("express/lib/response");

const app = express ()
const PORT = process.env.PORT || 3001

const rug = require('random-username-generator');

let users = [];

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
            "name": "Bumblebee",
            "image": "https://clipartix.com/wp-content/uploads/2016/05/Bumble-bee-honey-bee-clipart-image-cartoon-honey-bee-flying-around.jpg"
        },
        {
            "name": "Cat",
            "image": "images/cat.jpg"
            //"image": "http://clipart-library.com/images/8TAb5o9ec.jpg"
        },
        {
            "name": "Dino",
            "image": "http://clipart-library.com/images/ki8nKEdbT.png"
        },
        {
            "name": "Frog",
            "image": "http://clipart-library.com/images/8TznoGGoc.jpg"
        },
        {
            "name": "Hippo",
            "image": "http://clipart-library.com/images/8cz8jeeKi.png"
        },
        {
            "name": "Lion",
            "image": "http://clipart-library.com/images/kTKBeL7jc.png"
        }
    ];
    res.set("Content-Type", "application/json");
    res.status(200).send(body);
});

app.get("/levelTwo", (req, res)=>{
    headers = { http_status: 200, "cache-control": "no-cache" };
    body = [
        {
            "name": "Bumblebee",
            "image": "https://clipartix.com/wp-content/uploads/2016/05/Bumble-bee-honey-bee-clipart-image-cartoon-honey-bee-flying-around.jpg"
        },
        {
            "name": "Butterfly",
            "image": "http://clipart-library.com/img/853986.png"
        },
        {
            "name": "Dog",
            "image": "https://clipartix.com/wp-content/uploads/2016/12/Dog-clip-art-pictures-of-dogs.jpg"
        },
        {
            "name": "Frog",
            "image": "http://clipart-library.com/images/8TznoGGoc.jpg"
        },
        {
            "name": "Hippo",
            "image": "http://clipart-library.com/images/8cz8jeeKi.png"
        },
        {
            "name": "Lion",
            "image": "http://clipart-library.com/images/kTKBeL7jc.png"
        },
        {
            "name": "Mouse",
            "image": "http://clipart-library.com/images/kTMnkR49c.jpg"
        },
        {
            "name": "Owl",
            "image": "http://clipart-library.com/images/kiKRpgeij.png"
        },
        {
            "name": "Whale",
            "image": "http://clipart-library.com/images/riLxGxRaT.jpg"
        },
        {
            "name": "Zebra",
            "image": "https://cliparting.com/wp-content/uploads/2016/08/Clip-art-zebra-clipart-image.png"
        }
    ];
    res.set("Content-Type", "application/json");
    res.status(200).send(body);
});
app.get("/levelThree", (req, res)=>{
    headers = { http_status: 200, "cache-control": "no-cache" };
    body = [
        {
            "name": "Bumblebee",
            "image": "https://clipartix.com/wp-content/uploads/2016/05/Bumble-bee-honey-bee-clipart-image-cartoon-honey-bee-flying-around.jpg"
        },
        {
            "name": "Butterfly",
            "image": "http://clipart-library.com/img/853986.png"
        },
        {
            "name": "Cat",
            "image": "http://clipart-library.com/images/8TAb5o9ec.jpg"
        },
        {
            "name": "Dino",
            "image": "http://clipart-library.com/images/ki8nKEdbT.png"
        },
        {
            "name": "Dog",
            "image": "https://clipartix.com/wp-content/uploads/2016/12/Dog-clip-art-pictures-of-dogs.jpg"
        },
        {
            "name": "Elephant",
            "image": "http://clipart-library.com/images/pkT8ERRir.png"
        },
        {
            "name": "Frog",
            "image": "http://clipart-library.com/images/8TznoGGoc.jpg"
        },
        {
            "name": "Hippo",
            "image": "http://clipart-library.com/images/8cz8jeeKi.png"
        },
        {
            "name": "Horse",
            "image": "http://clipart-library.com/images/dc9XoERLi.png"
        },
        {
            "name": "Lion",
            "image": "http://clipart-library.com/images/kTKBeL7jc.png"
        },
        {
            "name": "Mouse",
            "image": "http://clipart-library.com/images/kTMnkR49c.jpg"
        },
        {
            "name": "Owl",
            "image": "http://clipart-library.com/images/kiKRpgeij.png"
        },
        {
            "name": "Sloth",
            "image": "http://clipart-library.com/img1/1871623.jpg"
        },
        {
            "name": "Turtle",
            "image": "https://publicdomainvectors.org/photos/1449722324.png"
        },
        {
            "name": "Whale",
            "image": "http://clipart-library.com/images/riLxGxRaT.jpg"
        },
        {
            "name": "Zebra",
            "image": "https://cliparting.com/wp-content/uploads/2016/08/Clip-art-zebra-clipart-image.png"
        }
    ];
    res.set("Content-Type", "application/json");
    res.status(200).send(body);
});

//rename to fastestplayer?? (and remove other fastest player?)
/*app.get("/highscores", (req ,res)=>{
    headers={"http_status":200, "cache-control":  "no-cache"}

    // sortera
    users.sort((a, b) => b.score - a.score);
    
    res.status(200).send(users)
})

app.get("/registerscore", (req ,res)=>{
    headers={"http_status":200, "cache-control":  "no-cache"}
    let user = req.query.user
    let score = req.query.score
    
    let data = {"user": user, "score": score}
    if(users.length <= 5){
          users.push(data);
    } else if(score > users[4].score){
          users.splice(4, 1);
          users.push(data);
    }
    
    res.status(200).send({"status":"success"})

})

app.get('/auth', (req, res) => {
    let user = rug.generate();
    users[user] = 0
    res.status(200).send({"user":user})
});
*/
app.listen(PORT , ()=>{
    console.log(`STARTED LISTENING ON PORT ${PORT}`)
});