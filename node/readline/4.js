// 通过递归循环 
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'OHAI>'     // 自动化生成一个文件 
});

const preHint = `
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See \`npm help json\` for definitive documentation on these fields
and exactly what they do.

Use \`npm install <pkg> --save\` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.

`

let index = 0;   // 游标
const questions = ['name', 'version', 'author'];    // 问题
const defaultAnsers = ['name', '1.0.0', 'none'];    // 默认答案
const answers = [];     // 用户答案

function createPackageJSON(){
    // json你想怎么准备？
    var map = {};
    questions.forEach((question, index) => {
        map[question] = answers[index];
    });

    fs.writeFileSync('./package.json', JSON.stringify(map, null, 4));    // 写入json文件   writeFileSync() 写入文件
}

function runQuestionLoop(){
    if(index === questions.length){
        createPackageJSON();    // 创建package.json文件
        rl.close();    // 关闭 递归退出条件
        return;
    }

    let defaultAnser = defaultAnsers[index];
    let question = questions[index] + ':(' + defaultAnsers[index] + ')';
    rl.question(question, function(answer){
        answers.push(answer || defaultAnser);
        index++;
        runQuestionLoop(); 
    })
}

runQuestionLoop();    // 运行 递归启动
