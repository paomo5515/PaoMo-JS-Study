// 创建多个 Promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1111)
  }, 1000);
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(2222)
    reject(2222)
  }, 2000);
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3333)
  }, 3000);
})

// race：竞速/竞赛
// 只要有一个 Promise 变成 fulfilled 状态，那么就结束
// 包括 拒绝状态
Promise.race([p1, p2, p3]).then(res => {
  console.log("res:", res)
}).catch(err => {

})