// 转成 Promise 对象
function foo() {
  const obj = { name: "obj" }
  return new Promise((resolve) => {
    resolve(obj)
  })
}

foo().then(res => {
  console.log("res:", res) // res: { name: 'obj' }
})

// 普通的值
// 类方法 Promise.resolve
const promise1 = Promise.resolve({ name: "hello" })
// 相当于
// const promise2 = new Promise((resolve, reject) => {
//   resolve({ nam: "hello" })
// })
promise1.then(res => {
  console.log("res:", res) // res: { name: 'hello' }
})

// 传入 Promise
const promise3 = Promise.resolve(new Promise((resolve, reject) => {
  resolve("33333")
}))
promise3.then(res => {
  console.log("res:", res)  // res: 33333
})

// 传入 thenable