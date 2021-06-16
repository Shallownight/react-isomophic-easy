const path = require('path');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const serverBabelConfig = require('./config/serverBabelConfig');

module.exports = merge(baseWebpackConfig, {
    // node中运行
    target: 'node',
    entry: path.resolve(__dirname, '../app.js'),
    output: {
        // 能够使用commonJs语法引入（require）
        libraryTarget: 'commonjs2',
        filename: 'app.js',
        path: path.resolve(__dirname, '../dist/server'),
        publicPath: '/',
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.js|jsx$/,
    //             exclude: /(node_modules|bower_components)/,
    //             use: {
    //                 loader: 'babel-loader',
    //                 options: serverBabelConfig
    //             }
    //         }
    //     ]
    // }
})