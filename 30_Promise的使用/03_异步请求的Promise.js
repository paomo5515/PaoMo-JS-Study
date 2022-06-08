// request.js
/*
  这种回调方式有很多弊端：
  1.如果我们自己封装的 requestData，那么我们在封装的时候 必须要自己设计好 callback
    名称，并且使用好
*/
function requestData(url) {
  // 异步请求的代码会被放入到 executor 中
  return new Promise((resolve, reject) => {
    // 模拟网络请求
    setTimeout(() => {
      // 拿到请求的结果
      // url传入的是 hello，请求成功
      if (url === "hello") {
        // 成功
        let names = ["a", "b", "c"];
        resolve(names)
      } else {// 否则请求失败
        // 失败
        let errMsg = "请求失败，url错误";
        reject(errMsg)
      }
    }, 3000)
  })
}

// main.js
const promise = requestData("hello")
promise.then((res) => {
  console.log("请求成功", res)
}, (err) => {
  console.log("请求失败", err)
})