/*
      定时器 ajax DOM UIRendering 加入到 宏任务队列(macrotask queue)
      queuqMicrotask Promise.then 加入到 微任务(microtask queuq)

    规范:
      先执行 主任务
      在执行任何的宏任务之前，都需要 先保证 微任务队列 已经被清空;
      如果不为空，那么就优先执行 微任务队列中 的任务(回调)
*/
setTimeout(() => {
  console.log("setTimeout")
}, 1000);

queueMicrotask(() => {
  console.log("queueMicrotask")
})

Promise.resolve().then(() => {
  console.log("Promise then")
})

function foo() {
  console.log("foo")
}

function bar() {
  console.log("bar")
}