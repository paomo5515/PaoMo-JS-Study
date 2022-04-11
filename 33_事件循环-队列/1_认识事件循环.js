console.log("script start")

// 业务代码
// setTime 里面的函数是异步的
setTimeout(() => {

}, 1000);
console.log("script ned")

// 事件循环: JS线程 -> 浏览器的其它线程(宏任务和微任务被加入到对列中) ->
// 浏览器维护的事件队列 -> JS引擎再去 队列中 执行事件