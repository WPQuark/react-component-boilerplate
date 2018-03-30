const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // eslint-disable-line
const webpack = require('webpack'); // eslint-disable-line
const pkg = require('./package.json');

const banner = `
My Awesome Component

Describe what the component does

@author Swashata Ghosh <swashata@wpquark.com>
@version ${pkg.version}
@link https://github.com/fontIconPicker/react-fonticonpicker
@license MIT

Copyright (c) ${(new Date()).getFullYear()} Swashata Ghosh <swashata@wpquark.com>

This software is released under the MIT License.
https://opensource.org/licenses/MIT
`;
const addBanner = new webpack.BannerPlugin({
	banner,
	raw: false,
	entryOnly: true,
	include: /\.(js|jsx|css)$/,
});
const extractSass = new ExtractTextPlugin({
	filename: 'react-mycomponent.css',
});


module.exports = {
	entry: path.join(__dirname, 'src/js/MyComponent.js'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'react-mycomponent.js',
		library: 'MyComponent',
		libraryTarget: 'umd',
	},
	externals: {
		react: {
			commonjs: 'react',
			commonjs2: 'react',
			amd: 'react',
			root: 'React',
		},
		'react-dom': {
			commonjs: 'react-dom',
			commonjs2: 'react-dom',
			amd: 'react-dom',
			root: 'ReactDOM',
		},
		'prop-types': {
			commonjs: 'prop-types',
			commonjs2: 'prop-types',
			amd: 'prop-types',
			root: 'PropTypes',
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: ['babel-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/,
				use: extractSass.extract({
					fallback: 'style-loader',
					use: [{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						},
					}, {
						loader: 'postcss-loader',
					}, {
						loader: 'sass-loader',
					}],
				}),
			},
		],
	},
	plugins: [
		addBanner,
		extractSass,
	],
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	mode: 'production',
};
