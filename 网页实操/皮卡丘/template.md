#如何画一直屁啦求
## 效果
给一个在线预览地址：
给一张截图：
## 概述
介绍为何要画一个皮卡丘：比如在画的过程中可以学习 css 的基本知识。激发学习 css 的兴趣等
如何画一个皮卡丘：分为几个部分：
+ 页面布局：背景色铺满和主体结构居中，拎一个你觉得重要的属性展开说说，给出相关代码
+ 眼睛：如何画？使用了哪些 css 属性，拎一个你觉得重要的属性展开说说，给出相关代码
+ 鼻子：如何画？使用了哪些 css 属性，拎一个你觉得重要的属性展开说说
+ 嘴巴：如何画？使用了哪些 css 属性，拎一个你觉得重要的属性展开说说
+ 腮红：如何画？使用了哪些 css 属性，拎一个你觉得重要的属性展开说说

## 页面布局
首先从页面布局开始讲，
抛出问题：如何撑开页面给背景色。并且使整个脸居中？
解决问题：如何使一个元素水平垂直居中？列出你知道的所有方法，在实战中你使用的是 flex 布局，于是你可以展开说说 flex 布局有哪些属性，每个属性有哪些值，每个值分别表示什么意思，有什么效果。 必要时可以用表格 代码块 截图等多种当时表示
最好使用代码来表示，比如：
|属性|值|
|--|--|
|`justtify-content`|center：让 flex 容器中的子节点在水平方向上居中。<br>flex-start: xxxxxxxxxxxxxx.|
介绍盒模型：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8592e2d3e60b4f94b219c90a385b44f9~tplv-k3u1fbpfcp-watermark.image?)
两种盒模型分别表示什么意思：
一种是 width=contentwidth
一种是 width=padidng+borderwidth+padding
前置知识点说完给一个页面布局的代码
```html
<div id="box">
     
</div>
```
```css
#box{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 300px;
    width: 180px;
    position: relative;
}

#box::before,
#box::after{
    box-sizing: border-box;
}


body{
    background: #ffe000;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;    
}
```
## 眼睛
眼镜部分有哪些 css 属性可以拎出来说一说？
比如说 `position:absolute`的绝对布局，为什么要使用这个 position，其他的 position 属性是什么意思？
right：50%中的 50%是怎么计算的，根据谁来算的？
```html
 <div class="eye eye-left"></div>
        <div class="eye eye-right"></div>
```
```css
.eye{
    position:absolute;
    width: 60px;
    height: 60px;
    background-color: #2e2e2e;
    border:2px solid black;
    border-radius: 50%;
    top:65px;
}

.eye-left{
    right: 50%;
    margin-right: 90px;
}

.eye-right{
    left: 50%;
    margin-left: 90px;
}
```
## 鼻子
## 嘴巴
## 腮红

## 总结
写一些在完成这个小作品的过程中的一些问题，以及如何解决的，获得的收获有哪些。


//学而不思则罔 思而不学则怠
//学习这么久要总结 要反思 不懂的第一时间查找资料 查不到再问我
