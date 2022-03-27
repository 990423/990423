三种添加CSS的方式

尖括号用 &lt;hh&gt; 

1. 外部样式表
   - CSS保存在.css文件中
   - 在HTML里使用<link>引用
- <link rel="stylesheet" type="text/css" href="main.css" />
   
2. 内部样式表
   - 不使用外部CSS文件
   
   - 将CSS放在HTML<style>里
   
   - <style type="text/css">
         .main{
             color:pink
         }
     </style>
   
     
3. 内联样式
   - 仅影响一个元素
   
   - 在HTML元素的style属性中添加
   
   - <div class="main" style="color:purple;">hhh</div>

内联样式比较麻烦，除非特殊要求一般很少用

font-family：字体； font-size：字体大小；color：颜色；

margin：外边距；padding：内边距；border：边框；

width，height：尺寸；background：背景；text：文本

选择器（selector)

1. **id选择器（#myid）**（规定用#来定义，不建议用来css，具有唯一性，全文档只能有一个名称）
2. **类选择器（.main）**（最常用的，规定用“.”来定义，类选择器可以被多种标签使用，同一个标签可以使用多个类选择器，用空格隔开）
3. **标签选择器（div,h1,p）**
4. 相邻选择器（h1 + p）
5. 兄弟选择器（h1 - p）
6. **子选择器（div>span）**
7. **后代选择器（div span）**
8. 通配符选择器（*）
9. 属性选择器（a[rel="external"]）
10. 伪类选择器（p:hover)

 选择器的优先级从高到低为：。Important>行内样式>ID选择器>类选择器>元素>通配符>继承>浏览器默认属性。HTML页面中的元素就是通过CSS选择器进行控制的。 

