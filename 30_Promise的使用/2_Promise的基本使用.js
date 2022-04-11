/*
      Promise 的API :
    当我们需要给予调用者一个承诺，待会儿我会给你回调数据时，就可以创建一个 Promise的对象；
    在通过 new 创建 Promise对象时，我们需要传入一个回调函数，我们称之为 executor
      这个回调函数会被立即执行，并且传入另外两个回调函数 resolve、reject;
      当我们调用 resolve 回调函数时，会执行 Promise对象的 then方法传入的回调函数;
      当我们调用 reject 回调函数时，会执行 Promise对象的 catch 方法传入的回调函数；
*/
function foo() {
  // Promise
  return new Promise((resolve, reject) => {
    resolve("success msg")
    // reject("failture msg")
  })
}
const fooPromise = foo()
// 第一个参数，会在 Promise 执行 resolve函数时，被回调
// 第二个参数，会在 Promise 执行 reject函数时，被回调
fooPromise.then((res) => {
  console.log(res)
}, (err) => {
  console.log(err)
})



// 传入的这个函数，被称为 executor
// resolve 回调函数，在成功时，会回调
// reject 回调函数，在失败时，会回调 
const promise = new Promise((resolve, reject) => {
  // console.log("promise传入的函数被执行")
  // resolve()
  reject()
})

promise.then(() => {

}, () => {

})

