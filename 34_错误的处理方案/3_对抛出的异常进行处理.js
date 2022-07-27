function foo(type) {
  if (type === 0) {
    throw new Error("foo error message!")
  }
}

// 1.第一种是不处理，bar函数 会继续将收到的异常直接 抛出去
function bar() {
  try {
    foo(0)
  } catch (error) {
    console.log("err:", error.message)
  } finally {
    // 不管有没有异常 finally 都是执行的
    console.log("finally 代码执行~~")
  }
}

function test() {
  bar()
}

function demo() {
  test()
}

// 两种处理方法：
// 第一种是不处理，那么异常会进一步抛出，直到顶层的调用
// 如果过再顶层也没有对 这个异常进行处理，那么我们的程序就会终止执行，并且报错
demo()

console.log("后续代码~~~")