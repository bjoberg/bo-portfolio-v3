var express = require('express');
var path = require('path');
var app = express();
var fs = require('fs');
var http2 = require('http2');

const port = process.env.PORT || 5000;
var node_env = process.env.NODE_ENV || 'development';
console.log(process.env.NODE_ENV);
express.request.__proto__ = http2.IncomingMessage.prototype;
express.response.__proto__ = http2.ServerResponse.prototype;

app.set('port', port);
app.use(express.static(__dirname + '/dist'));
app.get('/[^\.]+$', function(req, res) {
  res.set('Content-Type', 'text/html').sendFile(path.join(__dirname, '/dist/index.html'));
});

let options = null;

if (node_env === 'development') {
  options = {
    allowHTTP1: true,
    key: fs.readFileSync('./certs/localhost.key'),
    cert: fs.readFileSync('./certs/localhost.crt')
  }
} else {
  options = {
    allowHTTP1: true,
    key: process.env.CERT,
    cert: process.env.CERT_KEY
  }
}

http2.createServer(options, app).listen(app.get('port'), (err) => {
  if (err) {
    throw new Error(err);
  }
  console.log('Node app is running at localhost: ' + app.get('port'));
});

// app.listen(app.get('port'), function() {
//   console.log("Node app is running at localhost:" + app.get('port'));
// });