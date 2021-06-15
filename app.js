const path = require('path');
const express = require('express');
const routes = require('./routes');

const app = express();

// 设置模板引擎的模板目录
app.set('views', path.join(__dirname, 'views'));
// 设置模板引擎
app.set('view engine', 'ejs');

// 将 Client 输出目录作为静态资源目录
app.use(express.static(path.resolve(__dirname, './dist')));

// 路由
routes(app);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});