const path = require('path');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const pages = require('./pages');

const multiPageEntry = {};
pages.forEach(page => {
    multiPageEntry[page] = path.resolve(__dirname, '../src/' + page + '/index.jsx');
});

module.exports = merge(baseWebpackConfig, {
    // node中运行
    target: 'node',
    entry: multiPageEntry,
    output: {
        // 能够使用commonJs语法引入（require）
        libraryTarget: 'commonjs',
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist/server')
    }
})