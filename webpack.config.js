var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './output');
var APP_DIR = path.resolve(__dirname, '');

var config = {
  entry: './index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders : [
        {test: /\.js?$/,
            query : 
            { 
                presets : ["react","es2015","babel-preset-stage-1"]
            },
            exclude: /node_modules\/(?!(@material)\/).*/,
            loader: "babel-loader"
        },
        {test: /\.css?$/,
          loader: "style-loader!css-loader"
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "url-loader"
      }
    ]
  }
};

module.exports = config;