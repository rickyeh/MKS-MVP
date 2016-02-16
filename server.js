var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser());

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

// app.get('/', function(req, res) {
//   console.log('GET to home');
// });

app.post('/', function(req, res) {
  console.log('Received POST from client');
  var searchString = Object.keys(req.body)[0];
  console.log('Request Body : ', searchString);

  
  res.end(JSON.stringify({'Post':'Received'}), 201);
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
