//  js在node的异步问题
const fs = require('fs');

fs.writeFile('./b.txt', 'hello world', 'utf8', (err) => {     // 异步的
    if(err) throw err;
    console.log('文件写入成功');
})

fs.writeFileSync('c.txt', 'hello world', 'utf8');        //  等到写完 同步
console.log('c文件写入成功');