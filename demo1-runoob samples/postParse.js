/**
 * Created by zhanghao1 on 2017/8/2.
 */
var http = require('http');
var querystring = require('querystring');

var postHTML =
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    'Name： <input name="name"><br>' +
    'Age： <input name="age"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer(function (req, res) {
    var post = "";
    req.on('data', function (chunk) {
        post += chunk;
    });
    req.on('end', function () {
        // 解析参数
        post = querystring.parse(post);
        // 设置响应头部信息及编码
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        if(post.name && post.age) { // 输出提交的数据
            res.write("Name：" + post.name);
            res.write("<br>");
            res.write("Age：" + post.age);
        }
        //输出表单
        else {
            res.write(postHTML);
        }
        res.end();
    });
}).listen(3000);