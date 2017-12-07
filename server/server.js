var express = require('express');
var bodyParser = require('body-parser');

var mongooseConnection = require('./modules/mongoose-connection');
var game = require('./routes/game');

var app = express();

var port = 5000;

app.use(express.static('server/public'));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
mongooseConnection.connect();

app.use('/game', game);




app.listen(port,function(){
    console.log('listening on port', port);
})