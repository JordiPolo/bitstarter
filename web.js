var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  html = fs.readFileSync('./index.html', 'utf-8')
  responde.send(html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
