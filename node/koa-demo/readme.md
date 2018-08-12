# Koa的学习

通过学习阮一峰老师的网络日志--[Koa 框架教程](http://www.ruanyifeng.com/blog/2017/08/koa.html)来学习Koa的。

### Koa简介
Koa 就是一种简单好用的 Web 框架。它的特点是优雅、简洁、表达力强、自由度高。所有功能都通过插件实现。

### 准备
Koa 必须使用 node7.6 以上的版本。
```
$ cd koa-demos    // 进入示例库
$ npm install     //安装依赖
```

### 一、基本用法
#### 1、架设 HTTP 服务
```
    // 1.js
	const Koa = require('koa');
	const app = new Koa();

	app.listen(3000);
```
#### 2、 context对象 
表示一次对话的上下文（包括 HTTP 请求和 HTTP 回复）。通过加工这个对象，就可以控制返回给用户的内容。

> Context.response.body属性就是发送给用户的内容
```
// 2.js
const main = ctx => {
    ctx.response.body = 'Hello World';
};
app.use(main);
```
main函数用来设置ctx.response.body。然后，使用app.use方法加载main函数。ctx.response代表 HTTP Response。同样地，ctx.request代表 HTTP Request。

#### 3、 HTTP Response 的类型
Koa 默认的返回类型是text/plain，如果想返回其他类型的内容，可以先用ctx.request.accepts判断一下，客户端希望接受什么数据（根据 HTTP Request 的Accept字段），然后使用ctx.response.type指定返回类型。如：3.js

#### 4、网页模板
实际开发中，返回给用户的网页往往都写成模板文件。我们可以让 Koa 先读取模板文件，然后将这个模板返回给用户。 如：4.js

### 二、路由
#### 1、原生路由
通过ctx.request.path可以获取用户请求的路径，由此实现简单的路由。 例：5.js

#### 2、koa-route模块
原生路由用起来不太方便，我们可以使用封装好的koa-route模块。
```
const route = require('koa-route'); // 引入koa-route

app.use(route.get('/about', about)); // get('路径',路径的处理函数)
```

#### 3、静态资源
如果网站提供静态资源（图片、字体、样式表、脚本......），为它们一个个写路由就很麻烦，也没必要。koa-static模块封装了这部分的请求。
```
// 7.js
const path = require('path');
const serve = require('koa-static');

const main = serve(path.join(__dirname));
app.use(main);
```

#### 4、重定向
有些场合，服务器需要重定向（redirect）访问请求。比如，用户登陆以后，将他重定向到登陆前的页面。ctx.response.redirect()方法可以发出一个302跳转，将用户导向另一个路由。 例：8.js

### 三、中间件
#### 1、Logger功能
中间件（middleware）  
为了理解中间件，我们先看一下 Logger （打印日志）功能的实现。例：9.js

#### 2、中间件的概念
上一个例子里面的 Logger 功能，可以拆分成一个独立函数。
```
const logger = (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  next();
}
app.use(logger);
```
像上面代码中的logger函数就叫做"中间件"（middleware），因为它处在 HTTP Request 和 HTTP Response 中间，用来实现某种中间功能。app.use()用来加载中间件。  
基本上，Koa 所有的功能都是通过中间件实现的，前面例子里面的main也是中间件。每个中间件默认接受两个参数，第一个参数是 Context 对象，第二个参数是next函数。只要调用next函数，就可以把执行权转交给下一个中间件。

#### 3、中间件栈
多个中间件会形成一个栈结构（middle stack），以"先进后出"（first-in-last-out）的顺序执行。例：10.js
1. 最外层的中间件首先执行。
2. 调用next函数，把执行权交给下一个中间件。
3. ...
4. 最内层的中间件最后执行。
5. 执行结束后，把执行权交回上一层的中间件。
6. ...
7. 最外层的中间件收回执行权之后，执行next函数后面的代码。

#### 4、异步中间件
如果有异步操作（比如读取数据库），中间件就必须写成 async 函数。 例：11.js
```
const fs = require('fs.promised');

const main = async function (ctx, next) {
  ctx.response.type = 'html';
  ctx.response.body = await fs.readFile('./demos/template.html', 'utf8');
};
```
fs.readFile是一个异步操作，必须写成await fs.readFile()，然后中间件必须写成 async 函数。  
```
const 中间件名 = async function(ctx, next){
	...
	... = await 异步操作
}
```

#### 5、中间件的合成
koa-compose模块可以将多个中间件合成为一个。例：12.js
```
const middlewares = compose([logger, main]);
app.use(middlewares);
```

### 四、错误处理
#### 1、500错误
如果代码运行过程中发生错误，我们需要把错误信息返回给用户。HTTP 协定约定这时要返回500状态码。Koa 提供了ctx.throw()方法，用来抛出错误，ctx.throw(500)就是抛出500错误。
```
const main = ctx => {
  ctx.throw(500);
};
```

#### 2、404错误
如果将ctx.response.status设置成404，就相当于ctx.throw(404)，返回404错误。
```
const main = ctx => {
  ctx.response.status = 404;
  ctx.response.body = 'Page Not Found';
};
```

#### 3、处理错误的中间件
为了方便处理错误，最好使用try...catch将其捕获。但是，为每个中间件都写try...catch太麻烦，我们可以让最外层的中间件，负责所有中间件的错误处理。 例：13.js
```
const handler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.body = {
      message: err.message
    };
  }
};
```

#### 4、error事件的监听
运行过程中一旦出错，Koa 会触发一个error事件。监听这个事件，也可以处理错误。 例：14.js
```
app.on('error', (err, ctx) =>
  console.error('server error', err);
);
```

#### 5、释放error事件
如果错误被try...catch捕获，就不会触发error事件。这时，必须调用ctx.app.emit()，手动释放error事件，才能让监听函数生效。  例：15.js  
> main函数抛出错误，被handler函数捕获。catch代码块里面使用ctx.app.emit()手动释放error事件，才能让监听函数监听到。

### 五、Web App的功能
#### 1、Cookies
ctx.cookies用来读写 Cookie。  例：16.js
```
const main = function(ctx) {
  const n = Number(ctx.cookies.get('view') || 0) + 1;
  ctx.cookies.set('view', n);
  ctx.response.body = n + ' views';
}
```
> cookie 是存储于访问者的计算机中的变量。每当同一台计算机通过浏览器请求某个页面时，就会发送这个 cookie。

#### 2、表单
Web 应用离不开处理表单。本质上，表单就是 POST 方法发送到服务器的键值对。koa-body模块可以用来从 POST 请求的数据体里面提取键值对。 例：17.js
```
const koaBody = require('koa-body');

const main = async function(ctx) {
  const body = ctx.request.body;
  if (!body.name) ctx.throw(400, '.name required');
  ctx.body = { name: body.name };
};

app.use(koaBody());
```
打开另一个命令行窗口，运行下面的命令。
```
$ curl -X POST --data "name=Jack" 127.0.0.1:3000
{"name":"Jack"}

$ curl -X POST --data "name" 127.0.0.1:3000
name required
```
> 上面代码使用 POST 方法向服务器发送一个键值对，会被正确解析。如果发送的数据不正确，就会收到错误提示。

#### 3、文件上传
koa-body模块还可以用来处理文件上传。 例：18.js

打开另一个命令行窗口，运行下面的命令，上传一个文件。注意，/path/to/file要更换为真实的文件路径。
```
$ curl --form upload=@/path/to/file http://127.0.0.1:3000
["/tmp/file"]
```







