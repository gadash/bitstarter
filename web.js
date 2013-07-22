var express = require('express');
var app = express();
var fs = require('fs');
var buffer = new Buffer(fs.ReadFileSync('index.html'));
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('here');
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
