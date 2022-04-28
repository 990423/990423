#### `<script>`元素有以下七个属性

-  async（异步执行脚本）：可选。**表示应该立即开始下载脚本，但不能阻止其他页面动作**，比如下载资源或等待其他脚本加载。只对外部脚本文件有效。添加async属性的目的是告诉浏览器，不必等脚本下载和执行完之后再加载页面，异步脚本不应该再加载期间修改DOM

  标记为async的脚本并不保证能按照它们出现的次序执行（放在head里）`<script async src = “test.js>`

- charset：可选。**使用src属性指定的代码字符集。**这个属性很少使用，因为大多数浏览器不在乎它的值。

- crossorigin：可选。**配置相关请求的CORS（跨源资源共享）设置。默认不使用CORS。** crossorigin="anonymous"配置文件请求不必设置凭据标志。crossorigin="use-credentials"设置凭据标志，意味着出站请求会包含凭据。

- defer（推迟执行脚本）：可选。**表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有效。**在IE7及更早的版本中，对行内脚本也可以指定这个属性。（放在head里）

  ```html
  <script defer src ="test.js"></script>
  ```

  对defer属性的支持从IE4、Firefox3.5、Safari5和Chrome7开始，其他浏览器都会忽略这个属性，所以要把推迟执行的脚本放在页面底部比较好。这么写：`defer=defer`

- integrity：可选。**允许比对接收到的资源和指定的加密签名以验证子资源完整性（SRI,Subresource Integrity）**。如果接收到的资源的签名与这个属性指定的签名不匹配，则页面会报错，脚本不会执行。这个属性可以用于确保内容分发网络（CDN, Content DeliveryNetwork）不会提供恶意内容。

- src（标签位置）：可选。**表示包含要执行的代码的外部文件。**(放在body里)

- ```html
  <scripy src="test.js"></scripy>
  ```

- type：可选。**代替language，表示代码块中脚本语言的内容类型（也称MIME类型）**。按照惯例，这个值始终都是"text/javascript"，尽管"text/javascript"和"text/ecmascript"都已经废弃了。JavaScript文件的MIME类型通常是"application/x-javascript"，不过给type属性这个值有可能导致脚本被忽略。

- 当运行脚本的时候如果是`</script>`的时候，会被当成结束标签，这时候只要用转义符`“\”`（`<\/script>`）就可以让代码被浏览器完全解释了。

- 动态加载脚本

  因为JavaScript可以使用DOM API，所以通过向DOM中动态添加script元素同样可以加载指定的脚本。

  ```js
  let script = document.createELement('script');
  scripy.src = 'gibberish.js';
  script.async = false;
  document.head.appendChild(script);
  ```

  这种方式会严重影响性能，要想让预加载器知道这些动态请求文件的存在，可以再文档头部显式声明：`<link rel ="preload" href="gibberish.js">`

- XHTML中的变化

  把所有代码都包含到一个CDATA块中，在XHTML和XML中，CDATA块表示文档可以包含任意文本的区块，不做标签来解析,在兼容XHTML的浏览器中这样解决：

  ```html
  <script type = "text/javascript">
      <![CDATA[
      function compare(a,b){
          if(a<b){
              console.log("A is less than B");
          }
          else if (a>b){
              console.log("A is greater than B");
          }
          else{
              console.log("A is equal to B");
          }
      }
  ]]></script>
  ```

  在不兼容和不支持的浏览器中CDATA标记必须使用JavaScript注释来抵消

  ```html
  <script type = "text/javascript">
      //<![CDATA[
      function compare(a,b){
          if(a<b){
              console.log("A is less than B");
          }
          else if (a>b){
              console.log("A is greater than B");
          }
          else{
              console.log("A is equal to B");
          }
      }
  ]]></script>
  ```

#### 文档模式

- 最初的文档模式有两种：**混杂模式和标准模式。**

  两者的区别只体现在通过CSS渲染的内容方面，对JavaScript也有一些关联影响（副作用）

  随着浏览器的普遍实现，又出现了第三种文档模式：准标准模式。它没有标准规定那么严格，准标准模式通过过渡性文档类型和框架集文档类型来出发

#### `<noscript>`元素

- `<noscript>`元素被用于给不支持JavaScript的浏览器提供替代内容，除此以外也有别的作用

  `<noscript>`元素可以包含任何可以出现在`<body>`中的HTML元素，`<script>`除外，当”浏览器不支持脚本“和”浏览器对脚本的支持被关闭“的时候，浏览器将显示包含在`<noscript>`中的内容。任何一个条件被满足，包含在`<noscript>`中的内容就会被渲染（写在body中）

  -----

所有`<script>`元素会依照它们在网页中出现的次序被解释，在不使用defer和asyns属性的情况下，包含在`<script>`元素中的代码必须严格按次序解释。

通常将`<script>`元素放到页面末尾，介于主内容之后及`</body>`标签之前。

