// 不可以被实例化，怎么实现？ 
function ClassCannotInstance() {
    // ClassCannotInstance() 可以被执行
    // new ClassCannotInstance() 不可被执行
    // 判断 this 是否为 ClassCannotInstance 的实例化对象
    if (this instanceof ClassCannotInstance) {
        throw new Error('不能被实例化');
    }
    console.log('ClassCannotInstance执行成功');
}
// const instance = new ClassCannotInstance();

ClassCannotInstance();
// console.log(instance instanceof ClassCannotInstance);