/*
    在 ES11 中，添加了新的 API Promise.allSettled
  该方法会在所有的 Promise 都有结果(settled)，无论是 fulfilled，还是 reject，才会有
最终的状态；并且这个 Promise 的结果一定是 fulfilled
*/

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

// allSettled 不会来到 catch 里面
Promise.allSettled([p1, p2, p3, "aaa"]).then(res => {

  /*
  [
    { status: 'fulfilled', value: 1111 },
    { status: 'rejected', reason: 2222 },
    { status: 'fulfilled', value: 3333 },
    { status: 'fulfilled', value: 'aaa' }
  ] 
  */
  console.log(res)  // 是一个数组
}).catch(err => {
  console.log("err:", err) 
})
