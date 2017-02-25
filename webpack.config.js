let htmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
let fs =require('fs');
require('./mock/server')

module.exports = {
	entry:{
		app:'./src/core/angular.bootstrap.js'
	},
	output:{
		path:__dirname+'/dist/',
		filename:'[name]-[hash:7].js',
		jsonpFunction:'Topthinking'
	},
	devServer:{
		historyApiFallback:true,
		hot:true,
		inline:true,
		progress:true,
		port:9123,
		proxy: {
            '**/*': {
                target: 'htstp://localhost:9020',
                pathRewrite:JSON.parse(fs.readFileSync('./rewrite.json')),
                secure: false
            }
        }
	},
	resolve:{
		root:__dirname+'/src/'
	},
	module:{
		noParse: [],
		loaders:[
			{test:/\.js$/,exclude:/node_modules/,loader:'ng-annotate!babel'},
			{test:/\.html$/,loader:'raw'},
			{test:/\.less$/,loader:'style!css!less'},
		 	{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
            {test:/\.(png)|(jpg)|(gif)$/,loader: "url?limit=5"}
		]
	},
	plugins:[
		// new webpack.optimize.UglifyJsPlugin({
		// 	compress:{
  //               warnings: false
  //           },
  //           beautify:false,
  //           comments:false
		// }),
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
	]
};