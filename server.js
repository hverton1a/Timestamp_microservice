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
    console.log('aqui');
    res.status(200).json(TS.TimeStamp_Json("now")).end();
    return;
  });

// your first API endpoint... 
app.get(["/api/:data","/api/"], function (req, res) {
  Log(req);
/*   if(!req.params){
    console.log('aqui');
    res.status(200).json(TS.TimeStamp_Json("now"));
    return;
  } */
  if(TS.input_format_check(req.params.data)){
    res.status(200).json(TS.TimeStamp_Json(req.params.data));
    return;
  } else if (!(TS.input_format_check(req.params.data))){
    res.statusMessage = 'Bad Request,please check the format of the date string.Should be string YYYY-MM-DD or any decimal number amount of milliseconds! Ex. utc 2015-12-25 unix 1451001600000';
    res.status(400).json({ error: "Invalid Date" }).send('Bad Request,please check the format of the date string.Should be string YYYY-MM-DD or any decimal number amount of milliseconds! Ex. utc 2015-12-25 unix 1451001600000').end();
    return;
  }else{
    res.status(404).json({ error: "Invalid Date" }).send('Bad Request,please check the format of the date string.Should be string YYYY-MM-DD or any decimal number amount of milliseconds! Ex. utc 2015-12-25 unix 1451001600000').json({ error: "Invalid Date" });
  }
  return;
  //res.json(TS.TimeStamp_Json(req.params.data));
});


// listen for requests :)
var listener = app.listen(process.env.PORT || 3030, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
