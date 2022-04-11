/*
    CommonJS 是一个规范，最初提出来是在浏览器以为的地方使用，并且当时被名为 ServerJS，后来为
  了体现它的广泛性，修改为 CommonJS，平时我们也会 简称 CJS。
      Node是 CommonJS 在服务端一个具有代表性的实现；
      Browserify是 CommonJS 在浏览器中的一种实现；
      webpack 打包工具具备对 CommonJS 的支持和转换;
    所以，Node对 CommonJS 进行了支持和实现，让我们在开发 node 的过程中可以方便的进行模块化开发：
      在 Node中 每一个 js 文件都是一个单独的模块；
      这个模块中包括 CommonJS规范的核心变量：exports、module.exports、require；
      我们可以使用这些变量来方便的进行模块化开发；
    
   前面我们提到过模块化的核心是 导入和 导出，Node 中对其进行了实现；
      exports 和 module.exports 可以负责对模块中的内容进行导出；
      require函数可以帮助我们导入其他模块（自定义模块、系统模块、第三方库模块）中的内容；
*/  

/*
    CommonJS规范的缺点：
    CommonJS加载模块是同步的：
      同步意味着 只有等对应的模块加载完毕，当前模块中的内容才能被运行；
      这个在服务器不会有什么问题，因为服务器加载的 JS文件都是本地文件，加载速度非常块；
    如果将它应用于浏览器呢？
      浏览器 加载 JS文件需要先从服务器将文件下载下来，之后再加载运行；
      那么采用 同步的就意味着后续的 JS 代码都无法正常运行，即使是一些简单的 DOM 操作；
    所以在浏览器中，我们通常不使用 CommonJS规范：
      当然在 webpacak中使用 CommonJS 是另外一回事；
      因为它会将我们的代码转成浏览器可以直接执行的代码。  
*/