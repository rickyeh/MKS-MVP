var path = require('path');
var config = {
  entry: path.resolve(__dirname, 'public/scripts/app.js'),

  output: {
    path: path.resolve(__dirname, 'public/build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
      loader: 'babel' // The module to load. "babel" is short for "babel-loader"
    }]
  }
};

module.exports = config;