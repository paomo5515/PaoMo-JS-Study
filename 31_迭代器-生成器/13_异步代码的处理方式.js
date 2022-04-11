function requestData(url) {
  // 异步请求的代码会被放入到 executor 中
  return new Promise((resolve, reject) => {
    // 模拟网络请求
    setTimeout(() => {
      // 拿到请求的结果
      resolve(url)
    }, 2000)
  })
}

// 需求:
// 1> url: hello -> res :hello
// 2> url: res + "aaa" -> res:helloaaa
// 3> url: res + "bbb" -> res:helloaaabbb

// 1.第一种方案:多次回调
// 回调地狱
/* requestData("hello").then(res => {
  console.log(res) // hello
  requestData(res + "aaa").then(res => {
    console.log(res)  //  helloaaa
    requestData(res + "bbb").then(res => {
      console.log(res)  //  helloaaabbb
    })
  })
}) */


// 2.第二种方案: Promise种 then() 的返回值
/* requestData("hello").then(res => {
  return requestData(res + "aaa")
}).then(res => {
  return requestData(res + "bbb")
}).then(res => {
  console.log(res)
}) */


// 3.第三种方案: Promise + generator 实现
/* function* getData() {
  const res1 = yield requestData("hello")
  const res2 = yield requestData(res1 + "aaa")
  const res3 = yield requestData(res2 + "bbb")
  console.log(res3)
} */

// 手动执行生成器函数
/* const generator = getData()
generator.next().value.then(res => {
  generator.next(res).value.then(res => {
    generator.next(res).value.then(res => {
      generator.next(res)
    })
  })
}) */

// 自动执行 生成器函数
/* function execGenerator(genFn) {
  const generator = genFn()
  function exec(res) {
    const result = generator.next(res)
    if (result.done) {
      return result.value
    }
    result.value.then(res => {
      exec(res)
    })
  }
  exec()
}
execGenerator(getData) */

// npm co  这个包 已经实现了 自动化
/* const co = require("co")
co(getData) */


// 第四种方案: async await
async function getData() {
  const res1 = await requestData("hello")
  const res2 = await requestData(res1 + "aaa")
  const res3 = await requestData(res2 + "bbb")
  console.log(res3)  // helloaaabbb
} 

getData()