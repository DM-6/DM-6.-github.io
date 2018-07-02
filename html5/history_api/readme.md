网站由网页组成 超链接
web app mobile    native app(ios, android)

多页应用 很多页面  会跳转  重新刷新页面

缺点：
- 用户体验极差  
每次点链接，都要等待http请求及响应   
整个页面的刷新，页面白一下，如果传输时间大于0.5秒，会看到明显的白屏  
- 相同的html片段重复下载  

1. preventDeafult  a 超链接的默认行为  
    preventDefault() 方法阻止元素发生默认的行为（例如，当点击提交按钮时阻止对表单的提交）。
2. href attribute
3. jquery ajax 动态得到html内容
4. 内容 p content img src  
   拿到内容 替换一下：  
   $('').content()  
   $('').src()

SPA：Single Page Application  
单页应用

- 页面的状态 可以对应 路由  
   SPA 解决了用户体验的问题，但确带来另一个极其严重的问题，浏览记录没有了  
   history  html5的基本API  
   如何为每个状态改变（路由状态），产生一个URL（路由），并且生成一次浏览记录，让SPA的访问，更像传统的请求，location 浏览器的地址栏上的操作可以使用了。  
   如何主动去设置history

- 一个页面对应多个页面状态,每个页面状态都会有一个route路由(地址，state状态数据),又会用来对应一个组件  
  vue单页应用开发，由route响应 匹配相应的组件显示，再一直组件化的过程。    
