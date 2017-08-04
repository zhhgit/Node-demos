/**
 * Created by zhanghao1 on 2017/8/2.
 */
var net = require('net');
var server = net.createServer(function(connection) {
    console.log('client建立连接');
    connection.on('end', function() {
        console.log('client关闭连接');
    });
    connection.write('Hello World!\r\n');
    connection.pipe(connection);
});
server.listen(3000, function() {
    console.log('server is listening');
});