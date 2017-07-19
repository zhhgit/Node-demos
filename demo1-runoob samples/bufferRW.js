/**
 * Created by zhanghao1 on 2017/7/19.
 */
var buffer = new Buffer(10);
buffer.write("hello");
console.log( buffer.toString('utf8',0,5));