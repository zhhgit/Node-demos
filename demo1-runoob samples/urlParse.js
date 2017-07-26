/**
 * Created by zhanghao1 on 2017/7/20.
 */
var url = require("url");
var link = "https://www.zhanghao90.cn/test/index.html?a=aa&b=bb#pageA";
console.log("protocol;" + url.parse(link).protocol);
console.log("host;" + url.parse(link).host);
console.log("pathname;" + url.parse(link).pathname);
console.log("query;" + url.parse(link).query);
console.log("hash;" + url.parse(link).hash);
