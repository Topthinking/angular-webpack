'use strict';

let htmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
let defaultSettings = require('./cfg/defaults');

let config = {
  entry:{
    app:'./src/app.js',
    vendor: [
      "jquery",
      "font-awesome-webpack",
      "bootstrap-loader",
      "angular", 
      'angular-ui-router', 
      'oclazyload',
      'angular-animate'
    ]
  },
  output:{
    path:__dirname+'/dist/',
    filename: "script/[name].[hash:6].js",
    jsonpFunction:'Topthinking',
    chunkFilename: "chunks/[name].[chunkhash:6].js"
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
      chunks: ['app', 'vendor'],
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
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'script/vendor.[hash:6].js')
  ],
  module: defaultSettings.getDefaultModules()
};

module.exports = config;