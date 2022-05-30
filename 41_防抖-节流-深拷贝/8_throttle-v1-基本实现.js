function throttle(fn, interval) {
  // 1.记录上一次的开始时间
  let lastTime = 0
 
  // 2.事件触发时，真正执行的函数
  const _throttle = function () {
    // 2.1.获取当前事件触发的时间
    const nowTime = new Date().getTime()

    // 2.2.使用 时间间隔 - 上一次触发的时间 - 上一次开始的时间， 计算出还剩余多长时间去触发函数
    const remainTime = interval - (nowTime - lastTime)
    if (remainTime <= 0) {
      // 2.3.真正触发函数
      fn()
      // 2.4.保留上一次触发的时间
      lastTime = nowTime
    }
  }
  return _throttle
}