
### readline
1. 用来实现逐行读取，比如读取用户输入，或者读取文件内容。
2. readline模块提供了一个接口，用于一次读取一行可读 流（如process.stdin）

常使用场景：
- 文件逐行读取：比如说进行日志分析。
- 自动完成：比如输入npm，自动提示"help init install"。
- 命令行工具：比如npm init这种问答式的脚手架工具。

-----

#### 文件
1.js---输入小写转换为大写输出

2.js---文件逐行读取：日志文件分析access.log

access.log---用户访问日志
   > 三条记录  
   > 内容：
    >- 客户端 浏览器navigator
    >- 访问时间
    >- 访问状态码
    >- http协议

3.js---自动完成：代码提示
   > 实现一个简单的自动完成功能，当用户输入npm时，按tab键，自动提示用户可选的子命令，如help、init、install。
    >- 输入np，按下tab：自动补全为npm
    >- 输入npm in，按下tab：自动提示可选子命令 init、install
    >- 输入npm inst，按下tab：自动补全为 npm install

4.js---命令行工具：npmt init
  >- 借助readline实现一个迷你版的npm init功能，运行脚本时，会依次要求用户输入name、version、author属性（其他略过）。  
  >- 使用rl.question(msg, cbk)这个方法，在控制台输入一行提示，当用户完成输入，enter后，cbk就会被调用，并把用户输入作为参数传入。