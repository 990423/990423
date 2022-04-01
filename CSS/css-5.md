## css第四次作业
1.使用 clip-path 切割出一个等腰梯形，上宽 100px 下宽150px 高 200px

```css

.tx{
 width: 150px;
 height: 200px;
 background-color: lightgreen;
 font-size: 10px;
 clip-path: polygon(100% 100%, 80% 0%, 20% 0%,0 100%);/*右下，右上，左上，左下*/
}
```



2.使用 filter 实现一个毛玻璃效果

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/275b26d065c04956b83d2de29c1d625e~tplv-k3u1fbpfcp-watermark.image?)





```css
 div{
     position: absolute;
     width: 150px;
     height: 150px;
     border-radius: 100%;
     background-color:darkorange;  
     filter: blur(8px);
 }
```



3.利用计数器展示 100 以内的所有奇数，样式仿照7.2.4

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./counter.css">

</head>
<body>
    <figure class="container">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </figure>
    
</body>
</html>
```



```css
.container{
    display: flex;
    justify-content: space-between;
    counter-reset: n 1;
    
}
.container div{
    width: 3em;
    height: 3em;
    background-color: rosybrown;
    border-radius: 50%;
    position: relative;
    counter-increment: n 2;
}
.container div::before{
    content: 'x';
    position: absolute;
    font-size: 1.5em;
    font-family: sans-serif;
    width: inherit;
    line-height: 2em;
    text-align: center;
    color: white;
    content: counter(n);

}
```

