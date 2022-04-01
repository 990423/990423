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