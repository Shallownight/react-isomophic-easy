const path = require('path');
const express = require('express');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

// 打包的文件是个对象，代码会放在.default属性中
const distPage = require('./dist/server').default;

const app = express();

// 设置模板引擎的模板目录
app.set('views', path.join(__dirname, 'views'));
// 设置模板引擎
app.set('view engine', 'ejs');

// 将 Client 输出目录作为静态资源目录
app.use(express.static(path.resolve(__dirname, './dist/client')));

// 需要引入打包后的页面js文件，进行补水（hydrate）
function loadScript() {
    return `<script src="index.js"></script>`
}

// 将打包后的react代码转换成html代码
function render(req, res, next) {
    // 通过renderToString将组件转换成html字符串
    const contentHtml = ReactDOMServer.renderToString(
        // 在服务端运行 React
        React.createElement(distPage)
    );
    res.render('template', {
        content: contentHtml,
        script: loadScript(),
    })
}

// res.render 使用了模板目录中的template文件，后面的对象会根据属性替换模板中的变量
app.get('/', function (req, res, next) {
    render(req, res, next);
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});