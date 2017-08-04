/**
 * Created by zhanghao1 on 2017/7/19.
 */
var events = require("events");
var eventEmitter = new events.EventEmitter();
eventEmitter.on("event1",function () {
    console.log("event1 callback1");
});
eventEmitter.on("event1",function () {
    console.log("event1 callback2");
});
setTimeout(function () {
    eventEmitter.emit("event1");
},1000*3);