var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var file = "index.html";

var textbuf = new Buffer(fs.readFileSync(file));
var string = textbuf.toString();

app.get('/', function(request, response) {
  response.send(string);  
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
