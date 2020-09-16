const path = require('path');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig, {
    entry: {
        index: path.resolve(__dirname, '../routes/client/index.jsx')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist/client')
    }
})