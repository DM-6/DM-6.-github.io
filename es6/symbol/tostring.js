// 判断变量是否为数组
const arr = [1,2,3];
console.log(Object.prototype.toString.call(arr));
console.log(Array.isArray(arr));  //判断是否为数组
const func = function() {}
console.log(Object.prototype.toString.call(func));
const obj = {};
console.log(Object.prototype.toString.call(obj));

// Object 来自 function() {}
// 构造函数有prototype 属性，对象 __proto__
// console.log(Object.prototype.toString.call(arr));

const zk = {
    name: '曾凯',
    toString: function() {  //重写了原型链上的 toString()方法
        return `${this.name}是鸠摩智大师喜欢的程序员`;
    }
}
console.log(zk.toString());
// 序列化 "{name:'曾凯',habit: '交友'}"
// 将一个对象序列化成 JSON 字符
console.log(typeof JSON.stringify(zk));

