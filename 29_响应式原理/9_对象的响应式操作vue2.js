// 保存当前需要收集的 响应式函数
let activeReactiveFn = null

class Depend {
  constructor() {
    this.reactiveFns = new Set()
  }

  // 添加响应的函数
  // addDepend(reactiveFn) {
  //   this.reactiveFns.add(reactiveFn)
  // }

  depend() {
    if (activeReactiveFn) {
      this.reactiveFns.add(activeReactiveFn)
    }
  }

  // 通知
  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

// 封装一个响应式函数
function wachFn(fn) {
  activeReactiveFn = fn
  fn()
  activeReactiveFn = null
}

// 封装一个获取 depend 函数
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

// 封装一个响应式对象
function reactive(obj) {
  // 在 ES6 之前，监听 属性的改变
  Object.keys(obj).forEach(key => {
    let value = obj[key]
    Object.defineProperty(obj, key, {
      get() {
        const depend = getDepend(obj, key)
        depend.depend()
        return value
      },
      set(newValue) {
        value = newValue
        const depend = getDepend(obj, key)
        depend.notify()
      }
    })
  })
  return obj
}

// 在开发中常见的是 对象的响应式
const obj = {
  name: "hello", // depend对象
  age: 15  // depend对象
}

const objProxy = reactive(obj)

const info = {
  address: "上海市",
  height: 1.88
}

const infoProxy = reactive(info)

wachFn(() => {
  console.log(infoProxy.address)
})
infoProxy.address = "天津市"

// 直接创建响应式对象
const foo = reactive({
  name: "foos"
})

wachFn(() => {
  console.log(foo.name)
})
foo.name = "foooo"