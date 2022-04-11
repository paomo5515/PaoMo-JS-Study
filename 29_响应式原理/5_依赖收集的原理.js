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

// 封装一个响应式函数
const depend = new Depend()
function wachFn(fn) {
  depend.addDepend(fn)
}

// 封装一个获取 depend 函数
// { { name:"obj1",age:15 }:"aaa" }
const targetMap = new WeakMap()
function getDepend(target, key) {
  // 根据 target 对象获取 map 的过程
  // 获取 target 对象的属性
  let map = targetMap.get(target)
  if (!map) {
    // 没有就创建 map 对象
    map = new Map()
    // 将 map 对象 设置为 target 对象的属性
    targetMap.set(target, map)
  }

  // 根据 key 获取 depend 对象
  let depend = map.get(key)
  if (!depend) {
    // 创建 Depend 实例对象
    depend = new Depend()
    // 将 实例对象 depend 设置为 map 的 属性值
    map.set(key, depend)
  }
  return depend
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
    // depend.notify() 不管什么属性更改都会调用，存在弊端
    const depend = getDepend(target, key)
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

const info = {
  address: "上海市"
}

wachFn(function () {
  console.log(info.address, "监听address变化111111")
})

wachFn(function () {
  console.log(info.address, "监听address变化222222")
})

/* 
// obj 对象 
// name:depend
// age:depend
const objMap = new Map()
objMap.set("name",)
objMap.set("age", ageDepend)

// info 对象
// address:depend
const infoMap = new Map()

const targetMap = new WeakMap()
targetMap.set(obj, objMap)
targetMap.set(info, infoMap)

// obj.name
const objNameDepend = targetMap.get(obj).get("name")
depend.notify()
 */