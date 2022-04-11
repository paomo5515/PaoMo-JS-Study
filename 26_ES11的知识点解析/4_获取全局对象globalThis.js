// 获取某一个环境下的全局对象（Global object）

// 在浏览器
// console.log(window)
// console.log(this)

// 在 node 下
// console.log(global)

// 同一份代码，运行在 node 和浏览器 结果结果不同

// ES11 在 node 和 浏览器 结果都是 全局对象
console.log(globalThis) 

