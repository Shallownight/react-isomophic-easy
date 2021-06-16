const pages = require('../build/pages');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// 页面的名称 - 模块映射
const pageMap = pages.reduce((acc, page) => {
    acc[page] = require('./server/' + page);
    return acc
}, {});

function loadScript(page) {
    return `<script src="dll/vendors.dll.js"></script><script src="client/${page}.js"></script>`
}

function routes(app) {
    app.get('/:page.html', function(req, res, next) {
        const page = req.params.page;
        if (!pages.includes(page)) {
            res.render('template', {
                content: 404,
                script: null,
            })
        }

        const contentHtml = ReactDOMServer.renderToString(
            // 在服务端运行 React
            React.createElement(pageMap[page])
        );

        res.render('template', {
            content: contentHtml,
            script: loadScript(page),
        })
    })
}

module.exports = routes;