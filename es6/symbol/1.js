// var s1 = Symbol('foo');
// var s2 = Symbol('bar');
// console.log(s1);
// var sym = Symbol('My symbol');
// console.log(sym);
// console.log(typeof sym);
// console.log(String(sym));
// console.log(String(sym) === sym);

// console.log(s1 == s2);
// var str = "123"
// var str2 = new String("123");
// console.log(str);
// console.log(str === String(str2));

var mySymbol = Symbol();
var a = {
    "delay":1000,
    "delay":2000,
    [mySymbol]: 'Hello!'
}
console.log(a[mySymbol]);
var sym = Symbol();
Object.defineProperties(obj, sym, {
    configurable: false,
    writable: true,
    enumerable:true
})
obj[sym] = '张三疯';
console.log(obj[sym]);
a[sym] = {value: '您好'};

for (var key in a) {
    console.log(key, a[key]);
}
const objectSymbols = Object.getOwnPropertySymbols(a);
console.log(objectSymbols);

// console.log(a);
