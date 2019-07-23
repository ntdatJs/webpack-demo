const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: './src/app.js',
	output: {
	  filename: '[name].bundle.js',
	  path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
		    {
		      test: /\.js$/,
		      exclude: /node_modules/,
		      use: {
		        loader: 'babel-loader',
		        options: {
		          presets: ['@babel/preset-env']
		        }
		      }
		    }
		]	
	},
  	plugins: [
	    new HtmlWebpackPlugin({
	      	title: "Webpack Output",
	      	
	    }),
  	],
};


/*const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Output",
    }),
  ],
};
*/