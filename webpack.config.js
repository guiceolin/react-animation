var webpack = require('webpack');
var path = require('path');

var config = {
  entry: {
    1: '1.js',
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].bundle.js'
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
