//  ES6
// https://promisesaplus.com/

const PROMISE_STATUS_PENDING = "pending"
const PROMISE_STATUS_FULFILLED = "fulfilled"
const PROMISE_STATUS_REJECTED = "rejected"

class PMPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING
    this.value = undefined
    this.reason = undefined
    this.onFulfilledFns = []
    this.onRejectedFns = []

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        // 添加微任务
        queueMicrotask(() => {
          if(this.status !== PROMISE_STATUS_PENDING) return
          this.status = PROMISE_STATUS_FULFILLED
          this.value = value
          this.onFulfilledFns.forEach(fn => {
            fn(this.value)
          })
        });
      }
    }

    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        // 添加微任务
        queueMicrotask(() => {
          if(this.status !== PROMISE_STATUS_PENDING) return
          this.status = PROMISE_STATUS_REJECTED
          this.reason = reason
          this.onRejectedFns.forEach(fn => {
            fn(this.reason)
          })
        })
      }
    }
    executor(resolve, reject)
  }

  then(onFulfilled, onRejected) {
    // 1.如果在 then调用的时候，状态已经确定下来
    if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
      onFulfilled(this.value)
    }

    if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
      onRejected(this.reason)
    }
    // 2.将成功回调和失败的回调放到数组中
    if (this.status === PROMISE_STATUS_PENDING) {
      this.onFulfilledFns.push(onFulfilled)
      this.onRejectedFns.push(onRejected)
    }
  }
}



const promise = new PMPromise((resolve, reject) => {
  console.log("状态pending")
  resolve(1111)
  reject(2222)

})

// 调用多次 then()
promise.then(res => {
  console.log("res1:", res)
}, err => {
  console.log("err1:", err)
})

promise.then(res => {
  console.log("res2:", res)
}, err => {
  console.log("err2:", err)
})

// 在确定 Promise 状态之后，再次调用 then
setTimeout(() => {
  promise.then(res => {
    console.log("res3:", res)
  }, err => {
    console.log("err3:", err)
  })
}, 1000);