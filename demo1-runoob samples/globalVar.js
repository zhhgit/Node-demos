console.time("calTime");
console.log( __filename );
console.log(__dirname);

var timer = setTimeout(function () {
    console.log("hello");
    clearTimeout(timer);
},5000);

var i = 0;
var intervalTimer = setInterval(function () {
    if(i < 10){
        console.log("hello"+ i);
        i++;
    }
    else{
        clearInterval(intervalTimer);
        console.timeEnd('calTime');
    }
},2000);

