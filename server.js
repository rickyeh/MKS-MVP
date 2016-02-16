var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var keys = require('./keys.js')
var app = express();

var Flickr = require("flickrapi"),
    flickrOptions = {
      api_key: keys.flickr_api,
      secret: keys.secret_api
    };


app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser());

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.post('/', function(req, res) {
  console.log('Received POST from client');
  var searchString = Object.keys(req.body)[0];
  console.log('Request Body : ', searchString);

  var searchResults = [];

  // Make a flickr api call 
  Flickr.tokenOnly(flickrOptions, function(error, flickr) {
    console.log('Inside tokenOnly');
    flickr.photos.search({ text: searchString }, function(err, result) {
      if (err) {
        throw new Error(err);
      }

      console.log(result.photos.photo[0]);
    });
  // we can now use "flickr" as our API object,
  // but we can only call public methods and access public data
});

  
  res.end(JSON.stringify({'Post':'Received'}), 201);
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
