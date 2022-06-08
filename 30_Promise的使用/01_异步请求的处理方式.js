// request.js
/*
  这种回调方式有很多弊端：
  1.如果我们自己封装的 requestData，那么我们在封装的时候 必须要自己设计好 callback
    名称，并且使用好
*/
function requestData(url, successCallback, failtureCallback) {
  // 模拟网络请求
  setTimeout(() => {
    // 拿到请求的结果
    // url传入的是 hello，请求成功
    if (url === "hello") {
      // 成功
      let names = ["a", "b", "c"];
      successCallback(names)
    } else {// 否则请求失败
      // 失败
      let errMsg = "请求失败，url错误";
      failtureCallback(errMsg)
    }

  }, 3000)
}

// main.js
requestData("hello", (res) => {
  console.log(res)
}, err => {
  console.log(err)
})