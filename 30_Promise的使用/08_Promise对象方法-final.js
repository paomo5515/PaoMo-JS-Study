// ES9 中新增的一个特性：表示无论 Promise 对象无论变成 fulfilled 还是 reject状态，最终都会被执行的代码。
const promise = new Promise((resolve, reject) => {
  // resolve("resolve message")
  reject("reject message")
})

promise.then(res => {
  console.log("res:", res)
}).catch(err => {

}).finally(() => {
  // 最终都会被执行
  console.log("finally code execute")
})