// 闭包 原型链 apply call

// Function.prototype.bind2 = function(context){
//     var args = Array.prototype.slice.call(arguments, 1);
//     var that = this; // 指向当前对象
//     return function(){
//         // ？ bar 是谁？  bar -> Function
//         // ？ .apply(context) 
//         const bindArgs = Array.prototype.slice.call(arguments);
//         that.apply(this instanceof that ? this : context,args.concat(bindArgs));
//         // console.log(context);
//     }
// }

Function.prototype.bind2 = function(context){
    var self = this;
    // context 
    var args = Array.prototype.slice.call(argements, 1);
    var fNOP = function(){};
    var bound = function (){
        var bindArgs = Array.prototype.slice.call(arguments);
        self.apply(this instanceof self ? this : context,args.concat(bindArgs));
    }
    fNOP.prototype = this.prototype;
    bound.prototype = new fNOP();
    return bound;
}

var value = 2;
var foo = {
    value: 1
}
function bar(name,age){
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}
bar.prototype.friend = 'kevin';
var bindFoo = bar.bind(foo, 'daisy');
var obj = new bindFoo('18');
console.log(obj.habit);
console.log(obj.friend);

// var foo = {
//     value: 1
// }

// function bar(name, age){
//     console.log(this.value);
//     console.log(name);
//     console.log(age);
// }

// const bar2 = bar.bind2(foo, 'daisy');
// bar2(20);

// bind?
// 1 返回一个新的函数 高阶函数 大概形式： return function(){ bar() }
// 2 this的指向?  闭包

// js的高阶函数： 形参或返回也是一个函数
