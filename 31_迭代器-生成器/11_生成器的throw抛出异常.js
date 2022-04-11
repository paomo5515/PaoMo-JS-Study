function* foo() {
  console.log("函数开始执行了~")

  const value1 = 100
  try {
    yield value1
  } catch (error) { 
    console.log("捕获到异常情况", error) // 捕获异常,就会继续执行 第二段代码
  }

  console.log("第二段代码继续执行")
  const value2 = 200
  yield value2

  console.log("函数执行结束~")

}

const generator = foo()

console.log(generator.next())
// 第一段代码执行完之后  就会终止执行
console.log(generator.throw())