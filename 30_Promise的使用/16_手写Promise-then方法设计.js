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

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_FULFILLED
        queueMicrotask(() => {
          // 定时器不会阻塞  主任务的执行
          this.value = value
          // console.log("resolve被调用")
          // then传进来的第一个回调
          this.onFulfilled(this.value)
        });
      }
    }

    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_REJECTED
        queueMicrotask(() => {
          this.reason = reason
          // console.log("reject被调用")
          // then传进来的第二个回调
          this.onRejected(this.reason)
        })
      }
    }
    executor(resolve, reject)
  }

  then(onFulfilled, onRejected) {
    this.onFulfilled = onFulfilled
    this.onRejected = onRejected
  }
}



const promise = new PMPromise((resolve, reject) => {
  console.log("状态pending")
  
  reject(2222)
  resolve(1111)
})

// 调用 then()
promise.then(res => {
  console.log("res:", res)
}, err => {
  console.log("err:", err)
})

promise.then(res => {
  console.log("res2:", res)
}, err => {
  console.log("err2:", err)
})