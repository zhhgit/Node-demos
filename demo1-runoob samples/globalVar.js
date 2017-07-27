console.time("获取数据");
console.log( __filename );
console.log(__dirname);

var timer = setTimeout(function () {
    console.log("hello");
    clearTimeout(timer);
},5000);

var i = 0;
var intervalTimer = setInterval(function () {
    if(i < 5){
        console.log("hello"+ i);
        i++;
    }
    else{
        clearInterval(intervalTimer);
        console.timeEnd('获取数据');
    }
},2000);

