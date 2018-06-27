const fs = require('fs');

const readStream = fs.createReadStream('./a.txt', 'utf8');   //可读流
readStream        // on 事件
    .on('data',(chunk) => {    //数据来了
        console.log('读取到数据-------------\n' + chunk);
    })
    .on('error', (err) => {   //读取出错
        console.log('出错了' + err.message);
    })
    .on('end', () => {      //读取完成
        console.log('读取完成');
    })
    .on('close', () => {      //读取关闭
        console.log('已经关闭');
    })