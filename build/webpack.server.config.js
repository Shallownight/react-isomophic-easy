const path = require('path');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig, {
    // node中运行
    target: 'node',
    entry: {
        index: path.resolve(__dirname, '../src/index.jsx')
    },
    output: {
        // 能够使用commonJs语法引入（require）
        libraryTarget: 'commonjs',
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    }
})