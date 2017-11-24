
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());



var options =　{
  root:__dirname + "/public"
};

app.get('/',function(req,res){
  res.status(200);
  res.sendFile("/html/login.html",options);
});

app.post("/login",function(req,res){
  var name = req.body.name;
  var passwd = req.body.passwd;

  if (('lisi' === name) && ("123" === passwd)) {
    res.status(200);
    res.json({login:true,adminUrl:"/html/index.html"});
  }else{
    res.status(200);
    res.json({login:false});
  }
});

app.get("/admin",function(req,res){
  res.status(200);
  res.sendFile("/html/index.html",options);
});


app.use(function(req,res){
  res.status(404);
  res.type("text/html");
  res.send("<h1>not fund!</h1>");
});

var server = http.createServer(app);
server.listen(8000,function(){
  console.log("监听 8000.....");
});
