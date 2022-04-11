async function foo() {
  console.log("foo function start~")

  console.log("中间代码~")

  console.log("foo function end~")


  // 1.不写返回值  相当于 return  undefined
  // 2.return 123
  // 3. 返回 thenable
  /* return {
    then(resolve, reject) {
      resolve("hahah")
    }
  } */

  // 4.返回 Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("lllll")
    }, 2000);
  })
}

// 异步函数的返回值一定是一个 Promise (不管写没写返回值)
const promise = foo()
// 执行 then 之前  异步函数必须 return
promise.then(res => {

  console.log("promise then function exec", res)
})
