const fs = require('fs');
const path = require('path');

const pages = fs.readdirSync(path.resolve(__dirname, '../src/'));
module.exports = pages;
