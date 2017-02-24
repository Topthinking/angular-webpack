let htmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
module.exports = {
	entry:{
		app:'./src/core/angular.bootstrap.js'
	},
	output:{
		path:__dirname+'/dist/',
		filename:'[name]-[hash:6].js',
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
                target: 'htstp://localhost:9090',
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
			{
				test:/\.js$/,
				exclude:/node_modules/,
				loader:'ng-annotate!babel'
			},
			{
				test:/\.html$/,
				loader:'raw'
			},
			{
				test:/\.less$/,
				loader:'style!css!less'
			}
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
		})
	]
};