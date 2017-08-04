var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

//静态文件目录，static目录下的直接匹配，http://localhost:3000/img/logo.png匹配图片/static/img/logo.png
app.use(express.static('static'));
app.use(cookieParser());

//创建application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
});

app.get('/getRequest', function (req, res) {
    var response = {
        name:req.query.name,
        age:req.query.age
    };
    res.end(JSON.stringify(response));
});

app.post('/postRequest', urlencodedParser, function (req, res) {
    var response = {
        name:req.body.name,
        age:req.body.age
    };
    res.end(JSON.stringify(response));
});

app.listen(3000);