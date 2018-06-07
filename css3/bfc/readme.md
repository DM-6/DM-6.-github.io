# BFC

### 什么是BFC
  - BFC(Block formatting context):"块级格式化上下文"。它是一个独立的渲染区域，只有   Block-level box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。
  - 根元素 就是一个BFC
  - overflow: hidden 也是一个BFC

### BFC的约束规则
  - 同一个BFC的两个相邻box的margin会重叠，与方向无关，所以破坏规则，建立新的BFC Context 上下文的概念
  
### 如何创建BFC
  - 重新划一块渲染区域（独立的），形成一个块级格式化的环境
  - 块级--页面的基础box
  - 格式化--渲染

### 哪些元素会生成BFC
  - 根元素
  - float：不为none
  - position：absolute或fixed，只要不为static
  - display：为inline-block, table-cell, table-caption, flex, inline-flex
  - overflow：hidden 不为visible

###  BFC布局规则
  - 内部的Box会在垂直方向，一个接一个地放置。
  - Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
  - 每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
  - BFC的区域不会与float box重叠。
  - BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
  - 计算BFC的高度时，浮动元素也参与计算

-----

- 文档  块block 在页面上占据自己的位置
- 新的BFC overflow:hidden(不为visisble) 新的空间，告诉浏览器 外面的环境影响不到我，重新进行  
    block formatting 布局和定位
- 核心是 新的BFC 给出了新的不受外界影响的块级格式化环境

-----

定位 position

- 广义的定位 块级元素：垂直方向的上下定位  行内元素：水平方向的左右定位，由内容决定
- float 浮动  在一行的左边或者一行的右边定位
- flex 弹性布局
- position 狭义的定位

-----

BFC 重建一个上下文环境，

嵌套在BFC里面，像闭包一样

使用overflow:hidden  就是为了BFC