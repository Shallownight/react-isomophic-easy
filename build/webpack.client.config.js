const path = require('path');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const webpack = require('webpack');
const pages = require('./pages');

const multiPageEntry = {};
pages.forEach(page => {
    multiPageEntry[page] = path.resolve(__dirname, '../routes/client/' + page);
});

module.exports = merge(baseWebpackConfig, {
    entry: multiPageEntry,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist/client')
    },
    plugins: [
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, '../dist/dll/vendors.manifest.json')
        })
    ]
})