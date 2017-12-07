var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var mongoose = require('mongoose');

var game = require('./routes/game');


var port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/game', game);

var databaseUrl = 'mongodb://localhost:27017/game_chest';
mongoose.connect(databaseUrl);

mongoose.connection.on('connected', function(){
    console.log('mongoose connected to :', databaseUrl);
})

mongoose.connection.on('error', function(err){
    console.log('mongoose connection error', err)
})



app.listen(port,function(){
    console.log('listening on port', port);
})