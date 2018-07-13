// 

const readline = require('readline');

const completer = (line) => {
    // console.log(line);
    const command = 'npm';
    const subCommands = ['help', 'init', 'install'];    // 命令的智能小帮手
    // 小于command时，line是command一部分 补全一下
    // 输入为空，或者为npm的一部分，则tab补全为npm
    if(line.length < command.length){
        return [command.indexOf(line) === 0 ? [command] : [], line];
    }

    // 输入 npm，tab提示 help init install
    // 输入 npm in，tab提示 init install
    // 1. filter的条件字符串  replace 将npm空格替换成没有
    // 2. commands命出filter
    // hints 学名：建议            replace()转换  trim()去除空格
    let hints = subCommands.filter(subCommand => {
        const lineTrippedCommand = line.replace(command, '').trim();
        return lineTrippedCommand && subCommand.indexOf( lineTrippedCommand ) === 0
    })

    if(hints.length === 1){
        hints = hints.map(function(hit){
            return [command, hit].join(' ');
        })
    }

    // 匹配到多个或者没有匹配到 
    return [hints.length ? hints: subCommands, line];
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    completer: completer
});

rl.prompt();
