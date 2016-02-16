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

var RESULTS_TO_DISPLAY = 32;
var PHOTO_SIZE = 'q'; // h is large. q is small square.  See flickr API for more info.


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
  var searchString = Object.keys(req.body)[0];
  console.log('Received POST w/ Request Body : ', searchString);

  var searchResults = [];

  // Make a flickr api call 
  Flickr.tokenOnly(flickrOptions, function(error, flickr) {
    flickr.photos.search({
      text: searchString,
      page: 1,
      per_page: RESULTS_TO_DISPLAY
    }, function(err, result) {
      if (err) {
        throw new Error(err);
      }

      for (var i = 0; i < RESULTS_TO_DISPLAY; i++) {
        var currentPhoto = result.photos.photo[i];

        var farmId = currentPhoto.farm;
        var serverId = currentPhoto.server;
        var id = currentPhoto.id;
        var secret = currentPhoto.secret;

        var url = 'https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret;

        searchResults.push(url);
      }
      res.end(JSON.stringify(searchResults), 201);
    });
  });
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
