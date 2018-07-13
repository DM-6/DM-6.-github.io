// 文件逐行读取：日志文件分析access.log

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream('./access.log')
});

// on  node的一些事件的
rl.on('line', line => {
    const arr = line.split(' ');
    console.log('访问时间：%s %s, 访问地址: %s', arr[0], arr[1], arr[13]);
})