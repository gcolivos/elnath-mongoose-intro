var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var databaseUrl = 'mongo://localhost:27017/games';
mongoose.connect(databaseUrl);

app.get('/games', function(req, res){
    res.sendStatus(200);
})

app.listen(port,function(){
    console.log('listening on port', port);
})