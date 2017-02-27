'use strict';

let htmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
let fs =require('fs');
let defaultSettings = require('./cfg/defaults');
require('./mock/server');

let config = {
  entry:{
    app:'./src/core/angular.bootstrap.js'
  },
  output:{
    path:__dirname+'./dist/',
    filename:'[name]-[hash:7].js',
    jsonpFunction:'Topthinking'
  },
  devServer:{
    historyApiFallback:true,
    hot:true,
    inline:true,
    progress:true,
    port:defaultSettings.port,
    proxy: {
            '**/*': {
                target: 'htstp://localhost:9020',
                pathRewrite:JSON.parse(fs.readFileSync('./rewrite.json')),
                secure: false
            }
        }
  },
  resolve:{
    root:__dirname+'./src/'
  },
  plugins: [
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