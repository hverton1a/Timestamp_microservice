// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const TS = require('./timestamp.js');
const rateLimit = require('express-rate-limit');


const limiter = rateLimit({
  max: 10,
  windowMs: 1 * 10 * 1000,
  message: 'too many requests sent by this ip, please try again in an few moments !'
});


function Log(req){
  console.log(Date().toString()+' - '+req.ip+' '+req.method+' '+req.path);
}

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use('/api/',limiter);  // eg: app.use('/api', limiter);

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.set('trust proxy', 1);

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  Log(req);
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  Log(req);
  res.json({greeting: 'hello API'});
});


app.get("/api/", function (req, res) {
  Log(req);
    res.status(200).json(TS.TimeStamp_Json("now")).end();
    return;
  });

// your first API endpoint... 
app.get(["/api/:data","/api/"], function (req, res) {
  Log(req);
  if(TS.input_format_check(req.params.data)){
    res.status(200).json(TS.TimeStamp_Json(req.params.data));
    return;
  } else if (!(TS.input_format_check(req.params.data))){
    res.status(404).send();
    return;
  }else{
    res.status(400).send();
  }
  return;
});


// listen for requests :)
var listener = app.listen(process.env.PORT || 3030, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
