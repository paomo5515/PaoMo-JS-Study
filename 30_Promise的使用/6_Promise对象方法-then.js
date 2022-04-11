/**
 *  then方法是 Promsie对象上的一个方法：它其实是放在 Promise 的原型上的 Promise.prototype.then
*/

/* class Person {
  constructor(executor) {
    const resolve = () => {
      this.callback()
    }
    const reject = () => {

    }
    executor(resolve, reject)
  }
  then(callback) {
    this.callback = callback
  }
} */

// console.log(Object.getOwnPropertyDescriptors(Promise.prototype))

const promise = new Promise((resolve, reject) => {
  resolve("hahahha")
})

// 1.同一个 Promise 可以被多次调用 then 方法,不是链式 调用
// 当我们的 resolve方法被回调时，所有的 then 方法传入的回调函数都会被调用
/* promise.then((res) => {
  console.log("res1:", res)
})

promise.then(res => {
  console.log("res2:", res)
}) */

// 2.then方法传入的 "回调函数：可以有返回值"
// then 方法本身也是有返回值的，它的返回值是 Promise
// 1> 如果我们返回的是一个普通值，那么这个普通的值就会被作为 一个新的 Promise 的 resolve值

/* promise.then(res => {
  // return "aaaa"
  // 相当于
  // return new Promise((resolve) => {
  //  resolve("aaaa")
  // }) 
  // 如果没有返回值，相当于 undefined
}).then(res => {
  console.log("res:", res)  // res: aaaa
  return "bbbb"
}) */

// 2> 如果我们返回的是一个 Promise
/* promise.then(res => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1111)
    }, 3000)
  })
}).then(res => { 
  console.log(res)  // 1111
}) */


// 3> 如果返回的是一个对象，并且该对象实现了 thenable
promise.then(res => {
  return {
    then(resolve, reject) {
      resolve(2222)
    }
  }
}).then(res => {
  console.log("res:", res) // res: 2222
})