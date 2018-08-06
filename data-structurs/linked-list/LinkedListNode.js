// 链表结点 结点构成链表
// []数组 内存分配给我们一定数量的空间 存储空间的连续性问题 灵活性不够 指针


export default class LinkedListNode{
    // data collections data node
    // linked 链接起来 
    // list 数据集合
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }

    toString(callback){  // 得到它的值  传入一个callback 形参
        return callback ? callback(this.value): `${this.value}`;
    }
}