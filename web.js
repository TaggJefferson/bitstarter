var express = require('express');

var app = express.createServer(express.logger());

var text = fs.readFileSync(index.html)

app.get('/', function(request, response) {
  response.send(but.toString('utf8', 0, text));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
