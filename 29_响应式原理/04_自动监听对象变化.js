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

// 监听对象的属性变化：Proxy(vue3) Object.defineProperty(vue2)
const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    return Reflect.get(target, key, receiver)
  },
  set(target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
    depend.notify()
  }
})

// 当 name 属性 发生变化时，就执行 需要响应的函数
wachFn(function () {
  const newName = objProxy.name
  console.log("--------")
  console.log(objProxy.name)
  console.log("++++++++")
})

wachFn(function () {
  console.log(objProxy.name, "name function*******")
})

// age
wachFn(function () {
  console.log(objProxy.age, "age function*******")
})
wachFn(function () {
  console.log(objProxy.age, "age function*******")
})

objProxy.name = "jerry"

objProxy.age = 100