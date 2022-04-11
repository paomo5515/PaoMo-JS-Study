/*
    resolve(参数)
    1> 普通的值或对象
    2>传入一个 Promise
      那么当前的 Promise 状态，会由传入的 Promise 来决定
      相当于状态进行了移交
    3>传入一个对象，并且这个对象有实现 then 方法(并且这个对象实现了thenable接口)，
      那么也会执行该 then 方法，并且由该 then 方法决定后续状态
*/

// 1.传入 Promise 特殊情况
/* const newPromise = new Promise((res, err) => {
  res("aaa")
})

new Promise((resolve, reject) => {
  resolve(newPromise)
}).then(res => {
  console.log("res:", res)
}, err => {
  console.log("err:", err)
}) */


new Promise((resolve, reject) => {
  const obj = {
    then(resolve, reject) {
      // resolve("resolve message")
      reject("reject message")
    }
  }
  resolve(obj)
}).then(res => {
  console.log("res:", res)
}, err => {
  console.log("err:", err)
})


//  eatable/runable  
const info = {
  eat(){

  },
  run(){

  }
}