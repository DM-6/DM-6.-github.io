// 链表

import LinkedListNode from './LinkedListNode';
// 形成链表？ 将结点链起来？ 把数据集合从开始到结束显示出来 
// [] next 
// head   头
//   next
//   ......
// tail   尾

export default class LinkedList{
    constructor(){
        // 1 -> head delete(1)
        this.head = null;   // 头
        this.tail = null;   // 尾
    }

    toArray(){     // 形象的把数据结构->数组
        const nodes = [];
        let currentNode = this.head;
        while(currentNode){   // 当有这个结点的时候  循环遍历
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    }

    append(value){     // 追加结点
        const newNode = new LinkedListNode(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        return this;
        // 结点 由value+next构成
        // 1. 空的 head为空
        // 2. 非空 tail (其.next结点为null)
    }

    prepend(value){     // 快速在头部插入数据
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;

        if(!this.tail){
            this.tail = newNode;
        }

        return this;
    }

    delete(value){   // 删除一个结点
        if(!this.head){
            return null;
        }

        let deleteNode = null;

        while(this.head && this.head.value === value){
            deleteNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;

        if(currentNode !== null){
            while(currentNode.next){
                if(currentNode.next.value === value){
                    deleteNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else{
                    currentNode = currentNode.next;
                }
            }
        }

        if(this.tail.value === value){
            this.tail = currentNode;
        }

        return deleteNode;
    }

    find({ value = undefined, callback = undefined }){    // 通过某个条件找到结点
        if(!this.head){
            return null;
        }

        let currentNode = this.head;

        while(currentNode){
            if(callback && callback(currentNode.value)){
                return currentNode;
            }

            if(value !== undefined && currentNode.value === value){
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    }

    toString(callback){   // 得到链表  按顺序打印处理链表
        return this.toArray().map(node => node.toString(callback)).toString()        // toArray方法，将链表结点的数组 -> value数组   .map映射一下
    }
}
