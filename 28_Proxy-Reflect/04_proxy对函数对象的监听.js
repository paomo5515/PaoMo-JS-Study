function foo() {

}

const fooProxy = new Proxy(foo, {
  apply(target, thisArg, argArray) {
    console.log("对foo函数进行了apply调用")
    return target.apply(thisArg, argArray)
  },
  // argArray 是 参数 
  construct(target, argArray, newTarget) {
    console.log("对foo函数进行了new调用")
    return new target(...argArray)
  }
})

fooProxy.apply({}, ["aaa", "bb"]) // 对foo函数进行了apply调用
new fooProxy() // 对foo函数进行了new调用