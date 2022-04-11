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
  }, 500);
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3333)
  }, 3000);
})

// any:至少有任意一个的成功结果
// 如果都是 拒绝，那么才会执行 catch() 
Promise.any([p1, p2, p3]).then(res => {
  // console.log("res:", res) // res: 1111
  getRes(res)
}).catch(err => {
  console.log("err:", err)
})

function getRes(params) {
  console.log(params)
}