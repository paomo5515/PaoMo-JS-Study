// 普通函数不能使用 await
// 1.await 跟上表达式
function requestData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(222) // 1.
      reject(000) // 3.
    }, 2000);
  })
}

/* async function foo() {
  // 结果就是 返回的 Promise 执行 reolve()的结果
  // 如果没有结果,后面的代码就会等待有结果之后,才会执行
  // 相当于 后面的代码 相当于是在 res的 then里面执行的
  const res = await requestData()

  console.log("后面的代码", res)
  console.log("----------------")
}
foo() */

// 2.跟上其他的值
async function foo() {
  // const res1 = await 123
  /* const res1 = await {
    then(resolve, reject) {
      resolve("abc")
    }
  } */

  const res1 = await new Promise((resolve) => {
    resolve("hello")
  })
  console.log("res1:", res1)
}
foo()


// 3.reject值
async function bar() {
  const res = await requestData()
  console.log("res:", res)
}
// 如果 reject,那么就会把 reject 的值 作为 bar异步函数的 Promise 的 reject 的值
bar().catch(err => {
  console.log("err", err)
})