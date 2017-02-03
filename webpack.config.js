var webpack = require('webpack');
var path = require('path');
var dependencies = require('./package.json').dependencies;

var BUILD_DIR = path.resolve(__dirname, 'public/dist');
var APP_DIR = path.resolve(__dirname, 'views/assets');

function isExternal(module) {
	var userRequest = module.userRequest;

	if (typeof userRequest !== 'string') {
		return false;
	}
	
	for (var dependency in dependencies) {
		if (userRequest.indexOf(dependency) >= 0)
			return true;
	}

	return false;
}

var config = {
	entry: {
		index: APP_DIR + '/index.jsx',
		people: APP_DIR + '/people.jsx'
	},
	resolve: {
		extensions: ['', '.json', '.jsx', '.js', '.scss', '.css']
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	},
	module : {
		preLoaders: [
			{ test: /\.json$/, loader: 'json'}
		],
		loaders : [
			{ test: /\.jsx?/, include: APP_DIR, loader: 'babel' },
			{ test: /\.scss$/, loader: 'style!css!sass?outputStyle=compressed' }
		]
	},
	plugins: [
    	new webpack.optimize.CommonsChunkPlugin({
    		name: 'vendor',
    		minChunks: function(module) { return isExternal(module)}
    	}),
    	new webpack.optimize.DedupePlugin(),
    	new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
  	],
  	sassLoader: {
		includePaths: [
			'./node_modules'
		]
	}
};

module.exports = config;