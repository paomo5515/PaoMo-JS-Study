//  ES6
// https://promisesaplus.com/


const PROMISE_STATUS_PENDING = "pending"
const PROMISE_STATUS_FULFILLED = "fulfilled"
const PROMISE_STATUS_REJECTED = "rejected"

// 工具函数
function execFnWithCatchErr(execFn, value, reolve, reject) {
  try {
    const result = execFn(value)
    reolve(result)
  } catch (error) {
    reject(error)
  }
}

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
          if (this.status !== PROMISE_STATUS_PENDING) return
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
          if (this.status !== PROMISE_STATUS_PENDING) return
          this.status = PROMISE_STATUS_REJECTED
          this.reason = reason
          this.onRejectedFns.forEach(fn => {
            fn(this.reason)
          })
        })
      }
    }
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    onRejected = onRejected || (err => { throw err })
    onFulfilled = onFulfilled || (value => value)

    return new PMPromise((resolve, reject) => {
      // 1.如果在 then调用的时候，状态已经确定下来
      if (this.status === PROMISE_STATUS_FULFILLED) {
        execFnWithCatchErr(onFulfilled, this.value, resolve, reject)
      }

      if (this.status === PROMISE_STATUS_REJECTED) {
        execFnWithCatchErr(onRejected, this.reason, resolve, reject)
      }
      // 2.将成功回调和失败的回调放到数组中
      if (this.status === PROMISE_STATUS_PENDING) {
        if (onFulfilled) this.onFulfilledFns.push(() => {
          execFnWithCatchErr(onFulfilled, this.value, resolve, reject)
        })
        if (onRejected) this.onRejectedFns.push(() => {
          execFnWithCatchErr(onRejected, this.reason, resolve, reject)
        })
      }
    })
  }
  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  finally(onFinally) {
    this.then(() => {
      onFinally()
    }, () => {
      onFinally()
    })
  }

  static resolve(value) {
    return new PMPromise(resolve => resolve(value))
  }

  static reject(reason) {
    return new PMPromise((resolve, reject) => reject(reason))
  }

  static all(promiseArr) {
    // 问题关键：什么时候要执行 resolve，什么时侯要执行 reject
    return new PMPromise((resolve, reject) => {
      const values = []
      promiseArr.forEach(promise => {
        promise.then(res => {
          values.push(res)
          if (values.length === promiseArr.length) {
            resolve(values)
          }
        }, err => {
          reject(err)
        })
      })
    })
  }

  static allSettled(promiseArr) {
    return new PMPromise((resolve) => {
      const results = []
      promiseArr.forEach(promise => {
        promise.then(res => {
          results.push({ state: PROMISE_STATUS_FULFILLED, value: res })
          if (results.length === promiseArr.length) {
            resolve(results)
          }
        }, err => {
          results.push({ state: PROMISE_STATUS_REJECTED, value: err })
          if (results.length === promiseArr.length) {
            resolve(results)
          }
        })
      })
    })
  }
}

const p1 = new PMPromise(resolve => {
  setTimeout(() => { resolve(1111) }, 1000)
})
const p2 = new PMPromise((resolve, reject) => {
  setTimeout(() => { reject(2222) }, 2000)
})
const p3 = new PMPromise(resolve => {
  setTimeout(() => { resolve(3333) }, 3000)
})

/* PMPromise.all([p1, p2, p3]).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
}) */

PMPromise.allSettled([p1, p2, p3]).then(res => {
  console.log(res)
})