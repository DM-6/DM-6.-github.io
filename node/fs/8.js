// fs 模块  
// 查看文件详细信息 (创建时间、状态...)   stat

const fs = require('fs');

const stats = fs.statSync('./c.txt');
console.log(stats);      //文件状态
console.log(stats.isFile());    //判断是否是文件

