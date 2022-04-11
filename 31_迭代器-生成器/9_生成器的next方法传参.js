function* foo(num) {
  console.log("函数开始执行了~")

  const value1 = 100 * num
  console.log("第一段代码:", value1) // { value: 500, done: false }
  const n = yield value1

  const value2 = 200 * n
  console.log("第二段代码:", value2)  // { value: 2000, done: false }
  const count = yield value2

  const value3 = 300 * count
  console.log("第三段代码:", value3) // { value: 6000, done: false }
  yield value3

  console.log("函数执行结束~")
  return "123"
}

// 1.生成器上的 next() 可以传递参数
// 第一段传参
const generator = foo(5)

console.log(generator.next())

// 第二段代码.第二次调用 next() 的时候执行
console.log(generator.next(10))

console.log(generator.next(20))