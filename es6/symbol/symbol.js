// symbol js的基础数据类型之一（字符串、数值、布尔值、undefined、null、symbol、Object(数组、函数))
// 为 js 带来唯一值，不会重复
var s = Symbol();
console.log(typeof s);
var s1 = Symbol();
console.log(s == s1);
// console.log(new Symbol());   //TypeError:Symbol is not a constructor  
// Symbol 函数不可被实例化，箭头函数也不可被实例化