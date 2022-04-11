/* const promise = new Promise((resolve, reject) => {
  // resolve() // 使用 3 要使用 resolve
  // reject("rejectd status")
  // reject 的另外一种写法
  // throw new Error("rejected status")
}) */

// 1.当我们的 executor 抛出异常时，也是会调用错误(拒绝)捕获的回调函数的
/* promise.then(undefined, err => {
  console.log("err:", err)
}) */

// 2.通过 catch 方法来传入错误（拒绝）捕获的回调函数
/* promise.catch(err => {
  console.log("err:", err)
}) */
/* promise.then(res => {
  return 1111
}).catch(err => {
  // 对应的是 promise 的 catch 方法，而不是 调用 then 方法返回的 Promise对象
  console.log("err:", err)  //  err: rejectd status
}) */

// 3.
/* promise.then(res => {
  return new Promise((resolve, reject) => {
    reject("then rejected status")
  })
  // throw new Error("err message")
}).catch(err => {
  
  console.log("err:", err)  // ("then rejected status")
}) */



// 4.拒绝捕获的问题（前面课程）
/* promise.then(res => {

}, err => {
  console.log("err:", err)
}) */

const promise = new Promise((resolve, reject) => {
  // resolve() 
  reject("11111")
})

promise.then(res => {
  // 没有处理 reject  所以报错
}).then(res => {

}).catch(err => {
  // 先捕获 promsie的异常，如果，没有异常，再捕获调用thne() 后返回 的 Promise 对象的异常
})

// 相当于两次独立的调用
// promise.catch(err => {

// })

// 4.catch() 的返回值
const promise2 = new Promise((resolve, reject) => {
  reject("2222")
})

promise2.then(res => {

}).catch(err => {
  console.log("err:", err)
  return "catch return value"
}).then(res => {
  // catch() 返回一个返回一个 Promise 对象 然后调用 resolve() 
  console.log("res result:", res)  // res result: catch return value
}).catch(err => {
  console.log("err result", err)
})