
// 普通的值
// 类方法 Promise.resolve
const promise1 = Promise.reject({ name: "hello" })
// 相当于
// const promise2 = new Promise((resolve, reject) => {
//   reject({ nam: "hello" })
// })
promise1.then(res => {

}).catch(err => {
  console.log("err:", err) // res: { name: 'hello' }
})

// 注意：无论传入什么 值 都是一样的
const promiseReject = Promise.reject({
  then(resolve, reject) {
    resolve("2222222")
  }
})
promiseReject.then(res => {

}).catch(err => {
  console.log("promiseReject:", err)  // promiseReject: { then: [Function: then] }
})