'use strict';

let htmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
let defaultSettings = require('./cfg/defaults');

let config = {
  entry:{
    app:'./src/core/angular.bootstrap.js'
  },
  output:{
    path:__dirname+'/dist/',
    filename:'[name]-[hash:7].js',
    jsonpFunction:'Topthinking'
  },
  resolve:{
    root:__dirname+'./src/'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress:{
                warnings: false
            },
      beautify:false,
      comments:false
    }),
    new htmlWebpackPlugin({
      template:'./src/app.html',
      filename:'index.html',
      inject:'body',
      minify:{
            removeEmptyAttributes: true,
            removeAttributeQuotes: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true
          }
    }),
    new webpack.ProvidePlugin({
      $:'jquery',
      jQuery:"jquery",
      "window.jQuery":"jquery"
    })
  ],
  module: defaultSettings.getDefaultModules()
};

module.exports = config;