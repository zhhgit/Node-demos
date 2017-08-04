/**
 * Created by zhanghao1 on 2017/8/2.
 */
var http = require('http');
var url = require('url');
var util = require('util');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var params = url.parse(req.url, true).query;
    res.write("Name：" + params.name);
    res.write("\n");
    res.write("Age：" + params.age);
    res.end();
}).listen(3000);