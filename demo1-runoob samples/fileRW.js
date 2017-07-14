var fs = require("fs");
fs.writeFile('./doc/file.txt', 'test',  function(err) {
    if (err) {
        console.error(err);
    }
    fs.readFile('./doc/file.txt', function (err, data) {
        if (err) {
            console.error(err);
        }
        console.log("读取文件数据: " + data.toString());
    });
});