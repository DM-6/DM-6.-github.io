/** author xjy
 * data 2018-6-21
 * 模块提供Promise类
 */

class Promise {
    constructor(executor) {
        //  成功的值
        // promise 状态有几种？3种
        // pending 等待
        // resolved 成功 fulfilled
        // rejected 失败
        this.status = 'pending';
        this.value = undefined;
        this.reason = undefined;
        let resolve = (value) => {
            if (this.status === 'pending') {
                this.status = 'resolved';
                this.value = value;
            }
        }
        let reject = (reason) => {
            if (this.status === 'pending') {
                this.status = 'rejected';
                this.reason = reason;
            }
        }
        executor(resolve);
    }

    then(onFillfilled, onRejected) {
        if (this.status === 'resolved') {
            onFillfilled(this.value);
        }
        if (this.status === 'rejected') {
            onRejected(this.reason);
        }
    }
}


module.exports = Promise