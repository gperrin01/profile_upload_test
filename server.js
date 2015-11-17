/*************************************
// Create the server 
*************************************/

var express = require('express');
var app = express();
var http = require('http');
server = http.createServer(app); 
server.listen(8088, function(){
  console.log('listening on port', 8088);
}); 

app.use(express.static(__dirname + '/public'));
app.set('/views', './views');
app.set('view engine', 'ejs');

// body parser config for post requests on the form
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));


/*************************************
// Routing
*************************************/

app.get('/', function (req, res) {
  res.render('index');
})