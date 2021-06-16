const path = require('path');
const express = require('express');
const routes = require('./routes');

const app = express();

// 注册ejs扩展
// 当app.js被打包时，不能通过app.set('view engine', 'ejs')设置模板引擎，而需要require后先注册
app.engine('.ejs', require('ejs').__express);

// todo: 以下的路径'./views/、'dist'等 都是相对当前打开node程序的目录来定位的
// todo: 应该有更稳妥的解决方案

// 设置模板引擎的模板目录
app.set('views', './views');
app.set('view engine', 'ejs')

// 将dist输出目录作为静态资源目录
app.use(express.static('dist'));

// 路由
routes(app);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});