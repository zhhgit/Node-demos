/**
 * Created by zhanghao1 on 2017/8/1.
 */
var util = require('util');
function Person() {
    this.name = 'zhanghao';
    this.sayName = function() {
        return this.name;
    };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));