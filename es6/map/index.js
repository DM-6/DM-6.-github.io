const dogs = new Map();
dogs.set('Snickers',3);
dogs.set('Sunny',2);
dogs.set('Hugo',10);
dogs.set('Hugo',11);

// forEach()遍历
dogs.forEach((val,key) => console.log(val,key));

// 可以迭代的都可以使用for of 循环遍历

for(const [key,val] of dogs){
    console.log(key,val);
}

let a = 1;
let b = 2;
// let c = a;
// a = b;
// b = c;
console.log(a,b);
// 解构
[b,a] = [a,b]
console.log(a,b);