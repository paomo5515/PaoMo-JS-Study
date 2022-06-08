/* 
  从编程语言的发展力适来说，可以划分为三个阶段：
    机器语言：1000010100，一些极其指令；
    汇编语言：mov，ax，bx，一些汇编指令；
    高级语言：C、C++、java、javaScript、Python;

    但是计算机本身是不认识这些高级语言的，所以我们的代码最终还是需要被转换成机器指令。


    ### javaScript 代码，在浏览器中是如何被执行的？
      1.下载 js 代码(不是直接下载 在浏览器中输入域名 ==> 经过 DNS 解析 ==> IP 地址
    ==> 服务找到地址 ==> 返回 i ndex.html 的网页 ==> 浏览器解析html [在解析到的时候，(而不是直接就去下载)遇到css，就去服务器
    里面下载对应的css文件，遇到script标签时，就会把对应的js文件下载下来,就去执行js，浏览器内核执行 js 文件])

    ### 浏览器内核：
      Gecko：早期被Netscape 和 Mozilla Firefox 浏览器使用；
      Trident：微软开发，被 IE4~IE11 浏览器使用，但是 Eage 浏览器已经转向 Blink；
      Webkit：苹果基于 KHTML 开发、开源的，用于 Safari，Google Chrome 之前也在使用；
      Blink：是 Webkit 的一个分支，Google 开发，目前应用于 Google Chrome、Edge、Opera等；
    事实上，我们经常说的浏览器内核指的是浏览器的排版引擎：
    排版引擎，也称为为浏览器引起、页面渲染引擎或样板引擎。

    ###  HTML 解析的时候遇到了 JS 标签，应该怎么办？
      会停止解析　HTML ，而去加载和执行 JS 代码；
      下载完所需的 css js html 就去操作它们
      html(第一次就会被下载下来) ==> 浏览器内核里面的 HTML Parser 解析 html ==> 先将HTML会转换为 DOM tree(如果当前有 js 操作 DOM ==> 浏览器内核就会去执行 js)
        [DOM Tree + Style Rules] ==> Render Tree(渲染树) ==> 通过 Layout(布局引擎再去做一些操作[不同宽度的浏览器(展示效果)...]) ==> Painting(绘制) ==> Display(浏览器展示)
      CSS(被下载下来) ==> 浏览器内核里面的 CSS Parser 解析 CSS ==> Style Rules(CSS 规则 width...)

      JS 去操作 DOM 的时候 ==> JS 引擎执行

      JS 引擎会帮助我们将 JS 代码翻译成 CPU 指令来执行；

    ### 常见的 JS 引擎有哪些？
      SpiderMonkey：第一款 JS 引擎，由 Brendan Eich开发（也就是 JS 的作者）
      Chakra：微软开发，用于 IE 浏览器；
      JavaScriptCore：WebKit 中的 JS 引擎，Apple公司研发；
      V8：Google开发的强大JS 引擎，也帮助 Chrome 从众多浏览器中脱颖而出；

    ### 浏览器内核和 JS 引擎的关系
      先以 WebKit 为例，WebKit 事实上由两部分组成的：
        WebCore：负责 HTML解析、布局、渲染等等相关的工作；
        JavaScriptCore：解析、执行 JavaScript 代码；
 */