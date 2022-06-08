const promise = new Promise((resolve, reject) => {

})

promise.then(res => {

}, err => {

})

// 完全等价于 上面的的代码
new Promise((resolve, reject) => {
  // pending状态：待定
  console.log("----------")
  // resolve() // 处于 fulfilled状态 以兑现/已敲定
  reject() // 处于 rejected 状态 已拒绝
}).then(res => {
  console.log("res:", res)
}, err => {
  console.log("err:", err)
})

/*
    上面 Promise使用过程，我们可以将它划分成三个状态：
      待定(pending)：初始状态，既没有被兑现，也没有被拒绝；
        当执行 executor中的代码时，处于该状态；
      已兑现(fulfilled)：亦为之操作成功完成；
        执行了 resolve，处于该状态；
      已拒绝(rejected)：意味着操作失败；
        执行了 reject，处于该状态；
*/