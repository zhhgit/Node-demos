/**
 * Created by zhanghao1 on 2017/7/19.
 */
//要分别执行
var fs = require("fs");
var zlib = require("zlib");
/*--------压缩---------*/
fs.createReadStream("input.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("input.txt.gz"));

/*--------解压---------*/
fs.createReadStream("input.txt.gz").pipe(zlib.createGunzip()).pipe(fs.createWriteStream("inputNew.txt"));

