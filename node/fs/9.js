// 树状结构 文件夹 

const fs = require('fs');    //node的调用方式   require = import
const path = require('path');    // 引用一个新的模块  路径模块   path管理文件路径
const getFilesInDir = function(dir) {     // 函数  找出目录下所有文件   一个目录下 将文件列出来
    console.log(path.resolve(dir));
    let results = [path.resolve(dir)];     //新建数组   path.resolve() -> API
    const files = fs.readdirSync(dir, 'utf8')    // .readdirSync() API把这个目录底下的东西全部读出
    // console.log(files);
    files.forEach(file => {
        // console.log(file);
        file = path.resolve(dir, file);      // 路径 + 目录名  生成一个物理路径
        console.log(file);
        const stats = fs.statSync(file);
        if(stats.isFile()){    //是文件 push
            results.push(file);
        } else if(stats.isDirectory()){   //是目录 递归（一直递归到最后全是文件）
            results = results.concat(getFilesInDir(file));
        }
    })
    return results;
}     
const files = getFilesInDir('./txt');
console.log(files);