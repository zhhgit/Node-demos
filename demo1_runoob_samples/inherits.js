/*util.inherits方法只能继承Base.prototype添加上去的方法，而构造函数内部的属性和方法都没有被Sub继承
* Base.prototype中定义的属性不会被console.log 作为对象的属性输出。
* */

var util = require("util");
function Base(name,age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        console.log("Hello " + this.name);
    };
}
Base.prototype.sayName = function () {
    console.log("My name is " + this.name);
};
function Sub(name,age) {
}
util.inherits(Sub,Base);
baseObj = new Base("zhanghao1",27);
subObj = new Sub("zhanghao2",28);

console.log("----------------Base-----------------");
console.log(Base);

console.log("-----------------Base.prototype----------------");
console.log(Base.prototype);

console.log("----------------Base.__proto__-----------------");
console.log(Base.__proto__);

console.log("----------------baseObj-----------------");
console.log(baseObj);

console.log("----------------baseObj.prototype-----------------");
console.log(baseObj.prototype);

console.log("----------------baseObj.__proto__-----------------");
console.log(baseObj.__proto__);

console.log("----------------Sub-----------------");
console.log(Sub);

console.log("-----------------Sub.prototype----------------");
console.log(Sub.prototype);

console.log("----------------Sub.__proto__-----------------");
console.log(Sub.__proto__);

console.log("----------------subObj-----------------");
console.log(subObj);

console.log("----------------subObj.prototype-----------------");
console.log(subObj.prototype);

console.log("----------------subObj.__proto__-----------------");
console.log(subObj.__proto__);