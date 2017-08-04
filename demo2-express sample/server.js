var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var multer  = require('multer');
var fs = require("fs");

//静态文件目录，static目录下的直接匹配，http://localhost:3000/img/logo.png匹配图片/static/img/logo.png
app.use(express.static('static'));
app.use(cookieParser());
app.use(multer({ dest: '/tmp/'}).array('txt'));

//创建application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
});

//get请求
app.get('/getRequest', function (req, res) {
    var response = {
        name:req.query.name,
        age:req.query.age
    };
    res.end(JSON.stringify(response));
});

//post请求
app.post('/postRequest', urlencodedParser, function (req, res) {
    var response = {
        name:req.body.name,
        age:req.body.age
    };
    res.end(JSON.stringify(response));
});

//cookie
app.post("/cookieRequest",function (req,res) {
    res.end("accept cookies:" + JSON.stringify(req.cookies));
});

//文件上传
app.post('/uploadFile', function (req, res) {
    console.log(req.files);
    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if(err){
                console.log(err);
            }
            else{
                response = {
                    message:'File uploaded successfully',
                    filename:req.files[0].originalname
                };
            }
            res.end(JSON.stringify(response));
        });
    });
});

app.listen(3000);

console.log("server is running on port 3000");