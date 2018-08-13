const Emitter = require('events');
const http = require('http');

module.exports = class Application extends Emitter {    // Emitter子级向父级发送事件
    constructor(){
        super();
        this.middleware = [];   // 数组的特性：可加元素 有顺序  app.use(中间件)
    } 

    // 中间件处理函数 中间件是函数数组集合
    use(fn){    // use方法
        if(typeof fn !== 'function'){
            throw new TypeError('middleware must be a function');
        }

        this.middleware.push(fn);
        return this;    // 链式调用
    }

    callback(){ 
        this.emit('error');
        console.log('callback from middleware');            
    }
    listen(...args){
        this.on('error', this.onerror);
        const server = http.createServer(this.callback());   // 创建一个服务  返回一个server
        return server.listen(...args);    // 返回一个http响应服务
    }

    onerror(){
        console.log('出错了')
    }
}



