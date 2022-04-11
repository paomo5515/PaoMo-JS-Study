### 手写 Promise
  一、Promise 规范
    https://promisesaplus.com

  二、Promise 类设计
    class PMPromise {}
    function PMPromise (){}

  三、构造函数的规划
    class PMPromise {
      constructor(executor){
        // 定义状态
        // 定义 resolve、reject回调
        // resolve 执行微任务队列：改变状态、获取 value、then传入执行成功回调
        // reject 执行微任务队列：改变状态、获取 reason、then传入执行成功回调

        // try catch
        executor(reolve, reject)
      }
    }

    