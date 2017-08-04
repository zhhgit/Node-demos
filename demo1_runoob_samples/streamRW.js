/**
 * Created by zhanghao1 on 2017/7/19.
 */
var fs = require("fs");
var data = "";
/*----------读-----------*/
var rs = fs.createReadStream("input.txt");
rs.on("data",function (chunk) {
    data += chunk;
    console.log("add chunk data");
});
rs.on("error",function (err) {
    console.log(err.stack);
});
rs.on("end",function () {
   console.log("read finish");
   console.log(data);
});

/*----------写---------*/
var ws = fs.createWriteStream("output.txt");
ws.write("output text","UTF8");
ws.end();
ws.on("finish",function () {
    console.log("write finish");
});
ws.on("error",function (err) {
    console.log(err.stack);
});