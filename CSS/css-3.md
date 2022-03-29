1.css中哪些属性会被继承，列出常见的属性。

- 字体属性：
- **font**：组合字体；**font-family**：规定元素的字体系列；**font-weight**：设置字体的粗细；**font-size**：设置字体的尺寸；**font-style**：定义字体的风格；**font-variant**：设置小型大写字母的字体显示文本，所有小写字母都会被转换成大写，但是使用小型大写字体的字母和其他文本相比，字母尺寸更小。**font-stretch**：对当前的`font-family`进行伸缩变形；**font-size-adjust**：为某个元素规定一个`aspect`值，这样就可以保持首选字体的`x-height`
- 文本属性：
- **text-indent**：文本缩进；**text-align**：文本水平对齐；**line-height**：行高；**word-spacing**：增加或较少单词间的空白（字间隔）；**letter-spacing**：增加或较少字符间的空白（字符间距）；text-transform：控制文本大小写；direction：规定文本的书写方向；color：文本颜色
- 元素可见性：visibility
- 表格布局属性：caption-side；border-collapse；border-spacing；empty-cells；table-layout
- 列表布局属性：list-style-type；list-style-image；list-style-position；list-style
- 生成内容属性：quotes
- 光标属性：cursor
- 页面样式属性：page；page-break-inside；windows、orphans
- 声音样式属性： speak；speak-punctuation；speak-numeral；speak-header；speech-rate；volume；voice-family；pitch；pitch-range；stress；richness；azimuth；elevation 

2.如何使用伪元素画一个三角形？

```css
.section{
    width: 0px;
    margin: 0 auto;
    border: 50px solid;
    border-color:transparent transparent yellow transparent;
```



3.如何实现一个元素的居中？写出你能想到的所有方法

- `text-align：center`
- `margin:auto`

以下来源于百度

- 水平居中

1. 行内元素水平居中
   - **利用text-align：center可以实现块级元素内部的行内元素水平居中**，这个方法对inline、inline-block、inline-table和inline-flex元素水平居中都有效

```css
.parent{
    text-align:center;
}

```

如果块级元素内部包着也是一个块级元素，我们可以**先将其由块级元素改变为行内块元素，再通过设置行内块元素居中以达到水平居中**













4.使用目前学到的知识画一只皮卡丘

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/64d777b67a4f4cf79281073290b65991~tplv-k3u1fbpfcp-watermark.image?)