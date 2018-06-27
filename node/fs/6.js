const fs = require('fs');

//创建一个可写流     
const writeStream = fs.createWriteStream('./c.txt', 'utf8');
writeStream
    .on('close', () => {
        console.log('已经关闭了');
    });
writeStream.write('me');
writeStream.write('on');
writeStream.end('');

// 哪种服务需要可写流？
//    注册（上传图片）