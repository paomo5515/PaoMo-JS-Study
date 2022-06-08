/*
    生成器是 ES6 中新增的一种函数控制、使用的方案，它可以让我们更加灵活的控制函数什么时候
  继续执行、暂停执行的等；

    生成器函数也是一个函数，但是和普通的函数有一些区别：
  首先，生成器函数需要在 function 的后面加一个符号：*
  其次，生成器函数可以通过 yeild 关键字来控制函数的执行流程；
  最后，生成器函数的返回值是一个 Generator（生成器）；
    生成器事实上是一种特殊的迭代器；  
*/

function* foo() {
  console.log("函数开始执行了~")

  const value1 = 100
  console.log("第一段代码:", value1)
  yield

  const value2 = 200
  console.log("第二段代码:",value2)
  yield

  const value3 = 300
  console.log("第三段代码:",value3)
  yield

  console.log("函数执行结束~")
}
// 调用生成器函数时，会给我们返回一个生成器对象
foo() // 不会执行

const generator = foo()
// 第一个 yeild 以前的代码
generator.next()

// 第二段代码
generator.next()

// 第三段代码
generator.next()
generator.next()
