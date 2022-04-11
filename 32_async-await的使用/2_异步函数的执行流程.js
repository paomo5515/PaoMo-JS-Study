async function foo() {
  console.log("foo function start")

  console.log("内部的代码1")
  console.log("内部的代码2")
  console.log("内部的代码3")

  console.log("foo function end")
}

// 和普通函数没有区别
console.log("script start")
foo()
console.log("script end")