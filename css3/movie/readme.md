## 豆瓣 影院热映 移动端页面

*{}   不使用，因为消耗大

网站 grid 布局方式（九宫格）

(a.item[href="#"]>.cover>div.wp.ratio3_4>img.img-show[src="https://img1.doubanio.com/view/photo/m_ratio_poster/public/p2520331478.jpg"]+.info>(h3{超时空同居}+p.rank>span.rating-stars+span))*4

item[]  []里为内容
ratio3_4   宽高比3:4的图片

-------

两个语句相同结果
let src = img.getAtribute('data-src');

console.log(img.dataset.src);         //兼容性问题  ie9

--------

text-overflow: ellipsis;  超出文字...显示