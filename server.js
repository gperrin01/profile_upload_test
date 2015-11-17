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

// discovered Multer npm for file upload
var multer  = require('multer');
var upload = multer({dest: __dirname + '/uploads/'});


/*************************************
// Routing
*************************************/

app.get('/', function (req, res) {
  res.render('index');
})

app.post('/profiles', upload, function (req, res, next) {
  console.log('body', req.body);
  console.log('file', req.file);


})

