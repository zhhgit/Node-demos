var http = require("http");
http.createServer(function (req,resp) {
    resp.writeHead(200, {'Content-Type': 'text/plain'});
    resp.end("test");
}).listen("8080");
console.log("server启动成功");
