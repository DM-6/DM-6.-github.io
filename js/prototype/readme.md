## 原型链 prototype

判断原型链对象上是否具有某属性：hasPrototypeProperty(obj,name)
- obj：对象
- name：属性名

-------

方法：
>  hasOwnProperty()   
> * 1.方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性
> * 2.可以检测一个属性是否存在于一个实例对象中，还是存在于原型对象中，若存在于实例对象中，则返回true     

>  hasPrototypeProperty()  
> * 判断一个对象的原型上有无指定属性，只要原型上没有指定属性，就会返回 false。

-------

函数 是一个类 也是一个对象

js 几乎所有的函数都有一个prototype属性，指针一样，指向一个对象,属性或方法的集合，从而构造了一个类 