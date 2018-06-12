## new

new 关键字 

手写 new 达到关键字new的效果

- 1 要返回一个新的对象
- 2 满足需求：访问到Otaku 构造函数里的属性
- 3 访问到Otaku.prototype中的属性或方法

-----

- 参数1是类，后几个参数...（可能是茫茫多的）
- js 的函数参数异常灵活，数量可以不定，形参可以不给，
- 还有... reset 运算符整合起来，都会跟arguments结合起来

-----

- arguments 类数组(伪数组)，没有数组的方法
效果相同：
- var Constructor = Array .from(arguments);
- var Constructor = [].shift.call(arguments);

-----

## new2的两个考点：
- call( )  使用.shift 
- apply( )
- （两个都可以指定this）

### apply( )
- apply:方法能劫持另外一个对象的方法，继承另外一个对象的属性.
- Function.apply(obj,args)方法能接收两个参数
> - obj：这个对象将代替Function类里this对象
> - args：这个是数组，它将作为参数传给Function（args-->arguments）

### call( )
- call:和apply的意思一样,只不过是参数列表不一样.
- Function.call(obj,[param1[,param2[,…[,paramN]]]])
> - obj：这个对象将代替Function类里this对象
> - params：这个是一个参数列表
