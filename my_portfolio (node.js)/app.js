// var http = require("http");
var liveServer = require("live-server");
const express = require('express');
const app = express()
const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));//'portfolio/index.html');
})

app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/templates'));

app.use('/', router);

var server = app.listen(80, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

 // Console will print the message
//  console.log('Server running at http://127.0.0.1:8081/');
 