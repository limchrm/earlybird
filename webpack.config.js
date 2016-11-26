var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
entry: './src/index.js',

output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
},

devServer: {
	inline: true,
	port: 7777,
	contentBase: __dirname + '/public'
},

module: {
	loaders: [
		{
			test: /\.jsx?$/,
			loader: 'babel',
			exclude: /node_modules/,
			query: {
				cacheDirectory: true,
				presets: ['es2015', 'stage-0', 'react']
			}
		},
		{
			test: /\.scss$/, 
			loader: ExtractTextPlugin.extract('css!sass') 
		},
		{
			test: /\.css$/, 
			loader: ExtractTextPlugin.extract('css') 
		}
	],
},

plugins: [
	new ExtractTextPlugin("style.css")
],

devtool: 'cheap-module-eval-source-map',
}
