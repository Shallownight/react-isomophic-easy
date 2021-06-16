// todo: 以下babel配置是为了能够在node环境中直接混合使用ES6 module / CommonJS
// todo: 目前暂无法实现，后续再调研
// ssr下，因为直接从入口app.js打包，并在node环境下运营app.js的服务，需要对babel做一些额外的配置。

module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-syntax-dynamic-import"
    ]
}