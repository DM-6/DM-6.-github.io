const utils = {
    // 帮忙method执行的次数在规定时间内只有一次
    // method 执行时，函数内的this指向一定要指向PureFullPage   this.container
    // context 形参 上下文环境   event 事件  delay 时间（执行频率）
    throttle(method,context,event,delay){
        // args?
        // 返回的函数 就是等下事件执行的真正函数体
        // 闭包函数 重构
        let wait = false;
        return function(...args){    //真正的事件处理函数
            // console.log(args);
            // method()  this指向window   不用
            // args 是 event 对象
            // 执行时 上下文环境要跟以前一样   所以使用method.apply()
            if(!wait){
                method.apply(context,args);
                wait = true;
                setTimeout(() => {
                    wait = false
                },delay)
            }
        }
    }
}