function* foo(num) {
  console.log("函数开始执行了~")

  const value1 = 100 * num
  console.log("第一段代码:", value1)
  const n = yield value1

  const value2 = 200 * n
  console.log("第二段代码:", value2)
  const count = yield value2

  const value3 = 300 * count
  console.log("第三段代码:", value3)
  yield value3

  console.log("函数执行结束~")
  return "123"
}

const geterator = foo(5)
console.log(geterator.next())

// 第二段代码的执行,使用了 return 
// 相当于在 第一段代码的后面加上了 return ,就会提前终止生成器函数代码的继续执行
// { value: 10, done: true }
console.log(geterator.return(10)) 

console.log(geterator.next())