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

// unirest for http requests
var unirest = require('unirest');
// file system
var fs = require('fs');

Q = require('q');

// MAILS
var nodemailer = require("nodemailer");
var smtpTransport = nodemailer.createTransport("SMTP",{
   service: "Gmail",
   auth: {
       user: "gperrin01@gmail.com",
       pass: process.env.GMAIL_GPERRIN01_PASS
   }
});

function sendMail (username, email) {

  var text = "Dear " + username + ", \n" + "Thank you for registering with our app. Your details have been saved along with your profile picture. See you!";

  smtpTransport.sendMail({
   from: "Guillaume <me@camelia.com>",
   to: username + "<" + email + ">", 
   subject: "Registration Complete", 
   text: text
  })
}


/*************************************
// ROUTES AND API CALLS
*************************************/

app.get('/', function (req, res) {
  res.render('index');
})

app.post('/profiles', upload.single('picture'), function (req, res) {
  console.log('body', req.body);
  console.log('file', req.file);

  // Ensure User is in the UK
  unirest.get("https://freegeoip.net/json")
  .end(function (result){
    console.log('result IP', result.status, result.body);
    if (result.status !== 200) {
      res.send('An error occured as we are unable to confirm your are in the UK')
    }
    else if (result.body.country_code !== 'GB') {
      res.send('You need to be within the UK to register')
    }
    else {
      // OK UK, perform checks on face recognition
    }
  })


  // Ensure there is a face in the pic
  // if no pic, skip this process
  if (req.file){

    unirest.post("https://apicloud-facerect.p.mashape.com/process-file.json")
    .header("X-Mashape-Key", process.env.MASHAPE_FACERECT)
    .attach("image", fs.createReadStream(req.file.path))
    .end(function (result) {
      console.log('faces: ', result.status, result.headers, result.body);
      if (result.status === 200) {
        // if uk and face, send an email
        // then render ok thanks
        if (result.body.faces.length > 0) {
          sendMail(req.body.name, req.body.email);
          res.send('Your registration is complete. You will shortly receive a confirmation email.')
        }
        else {
          res.send('Please upload a picture with a human face on.');
        }
      }
      else {
        res.send('An error occured, probaly due to your file being too large. Please try again with a smaller file.');
      }
    });
  }


})

