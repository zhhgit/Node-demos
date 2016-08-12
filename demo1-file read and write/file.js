var fs = require("fs");
fs.writeFile('input.txt', '呵呵呵！',  function(err) {
    if (err) {
        return console.error(err);
    }
    fs.readFile('input.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("读取文件数据: " + data.toString());
    });
});