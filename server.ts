// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';

import * as express from 'express';
import * as compression from 'compression';
import { join } from 'path';
import { readFileSync } from 'fs';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 5000;
const DIST_FOLDER = join(process.cwd(), 'dist');
const NODE_ENV = process.env.NODE_ENV || 'development';

const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

app.engine('html', (_, options, callback) => {
  renderModuleFactory(AppServerModuleNgFactory, {
    // Our index.html
    document: template,
    url: options.req.url,
    // DI so that we can get lazy-loading to work differently (since we need it to just instantly render it)
    extraProviders: [
      provideModuleMap(LAZY_MODULE_MAP)
    ]
  }).then(html => {
    callback(null, html);
  });
});

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// Route to https
function requireHttps(req, res, next) {
  if (!req.secure && req.get('x-forwarded-proto') !== 'https' && NODE_ENV !== 'development') {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}

// Compress all files
app.use(compression());

// Always serve the application over https
app.use(requireHttps);

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// TODO: implement data requests securely
app.get('/api/*', (req, res) => {
  res.status(404).send('data requests are not supported');
});

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// Sitemap.xml file
app.get('/sitemap.xml', function(req, res) {
  res.render(join(DIST_FOLDER, 'browser', 'sitemap.xml'), { req });
});

// Robots.txt file
app.get('/robots.txt', function(req, res) {
  res.render(join(DIST_FOLDER, 'browser', 'robots.txt'), { req });
});

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render(join(DIST_FOLDER, 'browser', 'index.html'), { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
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
