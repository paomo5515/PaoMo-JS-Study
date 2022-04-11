async function foo() {
  console.log("foo function start")

  console.log("中间代码")

  // 异步函数中的异常,会被作为异步函数返回的 Promise的 reject 的值
  // 后续代码也会执行的
  throw new Error("err message")

  console.log("foo function end")
}

// 异步函数的返回值一定是一个代码
foo().catch(err => {
  console.log("err:", err)
})

console.log("后续还有代码....")