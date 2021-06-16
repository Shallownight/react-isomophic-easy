const fs = require('fs');
const path = require('path');

// todo: 这里的路径不太对劲，暂时直接返回页面数组
// const pages = fs.readdirSync(path.resolve(__dirname, '../src'));

module.exports = ['ImageGallery', 'TodoList'];
