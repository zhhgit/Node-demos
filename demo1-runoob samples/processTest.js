console.log('当前目录：' + process.cwd());
console.log('当前版本：' + process.version);
console.log('内存使用：'+ JSON.stringify(process.memoryUsage()));
console.log('执行路径：'+ process.execPath);
console.log('平台：'+ process.platform);
process.stdout.write("Hello World!" + "\n");
process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
});
process.on("exit",function (code) {
    console.log('退出码为:', code);
});

