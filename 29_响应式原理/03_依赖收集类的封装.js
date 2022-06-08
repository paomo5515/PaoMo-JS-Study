// 封装一个响应式的函数
// 只要响应了 就放到数组中
// let reactiveFns = []  // name 发生改变的 所有需要重新执行的函数

class Depend {
  constructor() {
    this.reactiveFns = []
  }

  // 添加响应的函数
  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn)
  }

  // 通知
  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

const depend = new Depend()
function wachFn(fn) {
  depend.addDepend(fn)
}

// 在开发中常见的是 对象的响应式
const obj = {
  name: "hello", // depend对象
  age: 15  // depend对象
}

// 当 name 属性 发生变化时，就执行 需要响应的函数
wachFn(function () {
  const newName = obj.name
  console.log("--------")
  console.log(obj.name)
  console.log("++++++++")
})

wachFn(function () {
  console.log(obj.name, "demo function-----")
})

obj.name = "jerry"
depend.notify()
