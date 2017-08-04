/**
 * Created by zhanghao1 on 2017/8/2.
 */
var http = require('http');

// 向服务端发送请求
var req = http.request({
    host: 'localhost',
    port: '3000',
    path: '/index.html'
}, function(response){
    var body = '';
    response.on('data', function(data) {
        body += data;
    });
    response.on('end', function() {
        console.log(body);
    });
});
req.end();