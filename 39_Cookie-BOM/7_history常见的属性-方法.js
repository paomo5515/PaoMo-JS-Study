const jumpBtn = document.querySelector("#jump")

jumpBtn.onclick = function () {
  // location.href = "./demo.html"

  // 跳转不刷新网页
  history.pushState({ name: "hello" }, "", "/demo")
  history.replaceState({ name: "hello" }, "", "/demo")
}

/**
 *  history 对象允许我们访问浏览器曾经的会话历史记录。
 *  有两个属性：
 *      length：会话中的记录数据；
 *      state：当前保留的状态值；
 *  有五个方法：
 *      back()：返回上一页，等价于 history(-1)；
 *      forward()：前进下一页，等价于 history.go(1)；
 *      go()：加载力适中的某一页；
 *      pushState()：打开一个指定的地址；
 *      replaceState()：打开一个新的地址，并且使用 replace；
 */