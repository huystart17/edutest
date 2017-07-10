/**
 * Created by huy on 7/7/17.
 */
const path = require('path')
const webpack = require('webpack')
module.exports = {
	entry : './devPublic/index.js',
	output: {
		path    : path.resolve(__dirname, 'public'),
		filename: 'app.bundle.js'
	}
};