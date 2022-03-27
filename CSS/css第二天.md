

阅读书本的 1.5-1.8 章，回答以下问题：

1.em和 rem 怎么用？除了他们之外，还要那些经常使用的单位？他们的含义是什么？（需要自己查资料）

- 和em单位相比，rem单位的优势在于，只通过修改<html>的文字大小，就可以改变整个页面中的元素大小，使用更方便。

```css
/*em的用法*/
div{
    font-size:12px;
}
div>p{
    width:10em;
    height:10em;
}
```

```css
/*rem的用法*/
html{
    font-size:14px;
}
div{
    font-size:12px;
}
div>p{
    width:10rem;
    height:10rem;
}
```



```css
<meta name="viewport" content="initial-scale=1,maximum-scale=1,minimum-scale=1">
```

 initial-scale - 初始的缩放比例 minimum-scale - 允许用户缩放到的最小比例 maximum-scale - 允许用户缩放到的最大比例然后再设置html的font-size： 



- **px**：像素；

- **em**：元素的字体高度；10px=1em

- **ex**（x-height）：所有字体元素是中小写x的高度，这个主要和字体有关，不同的字体，即使设置了相同的字体大小，但是ex的值也有可能不同，因为字体的x高度可能不同。一般设置em后，ex就会默认为em的一半，将1ex假设等于0.5em，因为大多数的字体的小写字母都是相应大写字母高度的一半；

- **rem**：元素字体高度，是root em的简写，**使用rem为元素设定字体大小时，rem相对的只是HTML根元素**。可以做到只修改根元素就可以成比例地调整所有字体大小，又可以避免字体大小逐层复合的连锁反应。

- 注意：

  - 一、若rem没有在根元素（html字体）指定参照值，那浏览器默认1 rem就是16px,若rem有指定值，则1rem就是等于指定值 。

  - 二，html设置为62.5%或者10px时会失效，是因为小于12px或者75%的字体大小不支持换算。这可能与有些浏览器不支持12px以下的大小有关。所以，使用rem单位，html的字体默认字体大小必须设置为12px或以上。若小于12px则浏览器换算时自动默认字体为12px。

2.标准盒模型和经典盒模型有什么区别？

​		①、标准盒子

- 标准盒模型下设置width ，`width=content`内容的宽度，就是说设定了width和height值得时候，**padding和border不被包含在定义得width和height之内**；

- **box-sizing:content-box;**    默认标准盒模型

- 总占地面积 = width/height + (内边距) pading2+ （边框）border2 + （左右）margin*2

  ②、经典盒子（怪异盒子）

- 经典盒模型下设置width，`width=content+padding+border`，内容宽度会被padding和border挤小，也就是说**width已经包含了padding和border值**

- **box-sizing:border-box;**   经典盒模型

- 总占地面积 = width/height(左右内边距，边框 / 上下内边距和边框) + margin*2

3.rgb(125,125,125)转换成十六进制表示要怎么写？写出推理过程

- RGB色值是以#号开头的6个十六进制数，每个颜色用2位十六进制表示

- 通过红（R）绿（G）蓝（B）三个颜色通道的变化以及它们相互之间的叠加来得到颜色，是加色模式

  > 125 ÷ 16 = 7......13，13对应D，所以转换成的十六进制数是#7D7D7D 

| RGB  | HEX  |
| ---- | ---- |
| 0    | 00   |
| 1    | 01   |
| 2    | 02   |
| 3    | 03   |
| 4    | 04   |
| 5    | 05   |
| 6    | 06   |
| 7    | 07   |
| 8    | 08   |
| 9    | 09   |
| 10   | 0A   |
| 11   | 0B   |
| 12   | 0C   |
| 13   | 0D   |
| 14   | 0E   |
| 15   | 0F   |



4.display 有哪些值？分别表示什么意思？

- **block** 转换成块状元素。
- **inline** 转换成行内元素。
- **none** 设置元素不可见。
- **inline-block** 象行内元素一样显示，但其内容象块类型元素一样显示。
- **list-item** 象块类型元素一样显示，并添加样式列表标记。
- **table** 此元素会作为块级表格来显示
- **inherit** 规定应该从父元素继承 display 属性的值

5.display:flex 有啥作用？常用的属性有哪些？

- display:flex是一种布局方式，可以应用于容器中，也可以应用于行内元素
- flex是flexible box的缩写，意为“弹性布局”，为盒状模型提供最大的灵活性，设为flex布局之后，子元素的float、clear和vertical-align属性就失效了

常见属性

- **flex-direction 容器内元素的排列方向(默认横向排列)**

  1：flex-direction:row; 沿水平主轴让元素从左向右排列

  2：flex-direction:column; 让元素沿垂直主轴从上到下垂直排列

   3：flex-direction:row-reverse；沿水平主轴让元素从右向左排列

- **flex-wrap 容器内元素的换行(默认不换行)**

  1：flex-wrap: nowrap; (默认)元素不换行，比如：一个div宽度100%，设置此属性，2个div宽度就自动变成各50%；

  2：flex-wrap: wrap; 元素换行，比如：一个div宽度100%，设置此属性，第二个div就在第二行了；

- **justify-content 元素在主轴（页面）上的排列**

  1：justify-content : center;元素在主轴（页面）上居中排列

   2：justify-content : flex-start;元素在主轴（页面）上由左或者上开始排列 

  3： justify-content : flex-end;元素在主轴（页面）上由右或者下开始排列 

  4：justify-content : space-between;元素在主轴（页面）上左右两端或者上下两端开始排列

   5：justify-content : space-around;每个元素两侧的间隔相等。所以，元素之间的间隔比元素与边框的间隔大一倍。 
   

- **align-items 元素在主轴（页面）当前行的横轴（纵轴）方向上的对齐方式**

  1：align-items : flex-start; 弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界（靠上对齐）。

   2：align-items : flex-end; 弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。（靠下对齐） 

   3：align-items : center; 弹性盒子元素在该行的侧轴（纵轴）上居中放置。（居中对齐） 

   4：align-items : baseline; 如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。（靠上对齐） 

-   **align-content 在弹性容器内的元素没有占用交叉轴上所有可用的空间时对齐容器内的各项（垂直）** 

   1：align-content: flex-start; 元素位于容器的开头。各行向弹性盒容器的起始位置堆叠。 

   2：align-content: flex-end; 元素位于容器的结尾。各行向弹性盒容器的结尾位置堆叠。 

   3：align-content: stretch; 元素位于容器的中心。各行向弹性盒容器的中间位置堆叠。 

   4：align-content: center; 默认值。元素被拉伸以适应容器。各行将会伸展以占用剩余的空间。如果剩余的空间是负数，该值等效于'flex-start'。 

   5：align-content: space-between;元素位于各行之间留有空白的容器内。各行在弹性盒容器中平均分布。

  6：align-content: space-around;元素位于各行之前、之间、之后都留有空白的容器内。各行在弹性盒容器中平均分布，两端保留子元素与子元素之间间距大小的一半。如果剩余的空间是负数或弹性盒容器中只有一行，该值等效于'center'。 

  ![](G:\图片\容器属性.png)

  
   