'use strict';

const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const dfltPort = 9123;

function getDefaultModules() {
  return {
    noParse: [],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'ng-annotate!babel'
      }, 
      {
        test: /\.html$/,
        loader: 'raw'
      }, 
      {
        test: /\.less$/,
        loader: 'style!css!less'
      }, 
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file?limit=10000&name=/fonts/[name].[ext]"
      }, 
      {
        test: /\.(woff|woff2)$/,
        loader: "url?limit=10000&prefix=font/&limit=5000&name=/fonts/[name].[ext]"
      }, 
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream&name=/fonts/[name].[ext]"
      }, 
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml&name=/fonts/[name].[ext]"
      }, 
      {
        test: /\.(png)|(jpg)|(gif)$/,
        loader: "url?limit=10000,name=/img/[name].[hash:6].[ext]"
      }, 
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff&name=/fonts/[name].[ext]"
      }, 
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader?limit=10000&name=/fonts/[name].[ext]"
      }
    ]
  };
}

module.exports = {
  srcPath: srcPath,
  publicPath: '/assets/',
  port: dfltPort,
  getDefaultModules: getDefaultModules
};