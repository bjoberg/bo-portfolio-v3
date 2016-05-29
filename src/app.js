'use strict';

var express = require('express'),
    posts = require('./mock/posts.json'),
    bucketlist = require('./mock/bucketlist.json');

var postsList = Object.keys(posts).map(function(value) {
  return posts[value];
});

var bucketListMapped = Object.keys(bucketlist).map(function(value) {
  return bucketlist[value];
});

var app = express();

app.use('/static', express.static(__dirname + "/public"));

//Needed for Jade rendering
app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');

app.get('/', function(req, res) {
  var path = req.path;
  //Render the jade index file
  res.render('index', {path: path});
});

app.get('/blog/:title?', function(req, res) {
  var title = req.params.title;
  if(title === undefined) {
    res.render('blog', {posts: postsList});
  } else {
    var post = posts[title] || {};
    res.render('post', {post: post});
  }
});

app.get('/Bucketlist', function(req, res) {
  var path = req.path;
  //Render the jade index file
  res.render('bucketlist', {bucketlist: bucketListMapped});
});

app.get('/posts', function(req, res) {
  if (req.query.raw) {
    res.json(posts);
  } else {
    res.json(postsList);
  }
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
