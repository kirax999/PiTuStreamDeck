var express = require('express');
let ejs = require('ejs');
var app = express();
var player = require('play-sound')(opts = {"player": "mpg123"});

app.use('/', express.static(__dirname + '/public'));
app.get('/', function (req, res) {
     res.render('home.ejs');
});

app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

var server = app.listen(80);

socket: {
    let io = require("socket.io").listen(server);
    io.sockets.on('connection' , function(socket) {
        socket.on("play", function(item) {
            researchFunction(item);
        });
    });
}

function researchFunction(item) {
    var audio = player.play(item, { timeout: 3000 }, function(err){
        console.log("pop");
        if (err && !err.killed) throw err
    })
    console.log("finish");
    //audio.kill();
    console.log("id item recus : " + item);
}

var msg = 'Hello World';
console.log(msg);