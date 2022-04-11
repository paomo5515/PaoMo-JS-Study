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

// 需求：所有的 Promise 都变成 fulfilled，再拿到结果
// 等到都有结果时，才返回
// 意外：在拿到所有结果之前，有一个 promise 变成了 rejected，那么整个 promise 都是 rejected
Promise.all([p1, p2, p3, "aaa"]).then(res => {
  console.log(res)  // [ 1111, 2222, 3333, 'aaa' ] 返回一个数组
}).catch(err => {
  console.log("err:", err)  // 2222 
})
