// 写的时候 怎么把以前的删去
const fs = require('fs');

fs.appendFile('./c.txt', 'hello', 'utf8', (err) => {
    if(err) throw err;
    console.log('append成功');
})