const pages = require('../build/pages');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

function loadScript(page) {
    return `<script src="${page}.js"></script>`
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

        // 打包的文件是个对象，代码会放在.default属性中
        const distPage = require('../dist/server/' + req.params.page).default;
        const contentHtml = ReactDOMServer.renderToString(
            // 在服务端运行 React
            React.createElement(distPage)
        );

        res.render('template', {
            content: contentHtml,
            script: loadScript(page),
        })
    })
}

module.exports = routes;