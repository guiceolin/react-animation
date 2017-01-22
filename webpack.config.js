var webpack = require('webpack');
var path = require('path');

var config = {
  entry: {
    1: '1/app.js',
    2: '2/App.js',
  },
  output: {
    path: path.resolve('./public'),
    filename: '[name]/bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.(js|jsx)$/,
        loader : 'babel'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve('./src'),
    ]
  }
};

module.exports = config;
