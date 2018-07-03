const Promise = require('./promise.js');

// 将要执行的耗时任务封在executor,实例化时就开始执行。
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello');
    }, 1000);
    // reject('aaaa');
});
p.then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
})





// 2秒后resolve 的定时器 同步化
// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hello World!')
//     },2000)
// });
// p.then((data) => {
//     console.log(data);
// })


// const promise = new Promise(function(resolve, reject) {
//     const a = ture;
//     setTimeout({
//         if(a) {
//             reslove('aaaaa');
//         } 
//     }, 2000)
// });