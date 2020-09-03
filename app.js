const express = require('express');

const app = express();

app.get('/', function (req, res, next) {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        </head>
        <body>
        <div id="root" style="color: red">hello word!</div>
        </body>
        </html>
    `)
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});