// promise  一种规范，目的是为异步操作提供统一接口

class Promise{   //执行一下executor
    constructor(executor){    // 构造函数  executor参数   形参就是一个函数 
        this.status = 'pending';     // 状态：等待中
        this.value = undefined;      // 执行完的结果 当前还没有  value对应reason
        this.reason = undefined;      // 失败后 得到一个失败原因
        let resolve = (value) => {   // value 形参是什么？  value是executor调用时传过来的结果
            if(this.status == 'pending'){
                this.status = 'resolve';      // 状态变成 已解决
                this.value = value
            }
        }
        let reject = (reason) =>{
            if(this.status == 'pending'){
                this.status = 'rejected';      // 状态变成 拒绝
                this.reason = reason
            }
        }
        // resolve, reject
        executor(resolve, reject);
        // ajax setTimeout node数据库处理 fs file 
    }
}

// new Promise((resolve, reject) => {

// })

module.exports = Promise   