var express = require('express');
var compression = require('compression');
var path = require('path');
var app = express();

const port = process.env.PORT || 5000;
const node_env = process.env.NODE_ENV || 'development';

function requireHttps(req, res, next) {
  if (!req.secure && req.get('x-forwarded-proto') !== 'https' && node_env !== "development") {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}

app.set('port', port);
app.use(compression());
app.use(express.static(__dirname + '/dist'));
app.use(requireHttps);

app.all('*', function(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});


// //////////////////////////////////////////////////////////////////
// HTTP/2 Implementation
// //////////////////////////////////////////////////////////////////

// var express = require('express');
// var path = require('path');
// var app = express();
// var fs = require('fs');
// var http2 = require('http2');

// const port = process.env.PORT || 5000;
// var node_env = process.env.NODE_ENV || 'development';
// console.log(process.env.NODE_ENV);
// console.log(node_env);
// express.request.__proto__ = http2.IncomingMessage.prototype;
// express.response.__proto__ = http2.ServerResponse.prototype;

// app.set('port', port);
// app.use(express.static(__dirname + '/dist'));
// app.get('/[^\.]+$', function(req, res) {
//   res.set('Content-Type', 'text/html').sendFile(path.join(__dirname, '/dist/index.html'));
// });

// let options = null;

// // if (node_env === 'development') {
//   options = {
//     allowHTTP1: true,
//     key: fs.readFileSync(__dirname + '/certs/server.key'),
//     cert: fs.readFileSync(__dirname + '/certs/server.crt')
//   }
// // } else {
// //   options = {
// //     allowHTTP1: true,
// //     key: process.env.CERT,
// //     cert: process.env.CERT_KEY
// //   }
// // }
// console.log(options);
// http2.createServer(options, app).listen(app.get('port'), (err) => {
//   if (err) {
//     throw new Error(err);
//   }
//   console.log('Node app is running at localhost: ' + app.get('port'));
// });

// // app.listen(app.get('port'), function() {
// //   console.log("Node app is running at localhost:" + app.get('port'));
// // });