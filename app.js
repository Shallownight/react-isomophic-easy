const path = require('path');
const express = require('express');

const app = express();

// 设置模板引擎的模板目录
app.set('views', path.join(__dirname, 'views'));
// 设置模板引擎
app.set('view engine', 'ejs');

// res.render 使用了模板目录中的template文件，后面的对象会根据属性替换模板中的变量
app.get('/', function (req, res, next) {
    res.render('template', {
        content: 'hello word'
    });
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});