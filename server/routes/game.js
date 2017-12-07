//a get request for games

var express = require('express');
var router = express.Router();
var Game = require('../models/game.schema')

router.get('/', function (req, res) {
    // a get request for all games
    console.log("In the get function. Req = " + req);
    Game.find({}, function (errorMakingDatabaseQuery, data) {
        if (errorMakingDatabaseQuery) {
            console.log('error with game find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.send(data);
        }

    });
});

router.post('/', function (req, res) {
    // a post request for a games
    var addGame = new Game(req.body); //makes a mongoose object
    //takes req.body, passes it into the schema
    addGame.save(function (errorMakingDatabaseQuery, data) {
        if (errorMakingDatabaseQuery) {
            console.log('error with game save', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });
});

module.exports = router;