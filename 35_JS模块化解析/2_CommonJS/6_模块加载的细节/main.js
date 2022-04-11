console.log("main.js 代码开始运行")
/*
    模块的加载过程
  结论一：模块在被第一次引入时，模块中的 JS 代码会被运行一次
  结论二：模块被多次引入时，会缓存，最终只加载（运行）一次
    为什么只会加载运行一次呢？
      这是因为每个模块对象 module 都有一个属性：loaded。
      为 false 表示还没有加载，为 true 表示已经加载；
*/

// 引入 foo 的时候，foo的代码就会被运行一次
require("./foo")

console.log("main.js 代码后续运行")

