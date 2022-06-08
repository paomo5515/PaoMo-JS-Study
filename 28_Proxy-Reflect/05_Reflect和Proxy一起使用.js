const obj = {
  name: "hello",
  age: 19
}

const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    console.log("get---------")
    // return target[key] // Proxy 本质上还是操作的对象本身
    return Reflect.get(target, key)
  },
  set(target, key, newValue, receiver) {
    console.log("set---------")
    // return target[key] = newValue
    const result = Reflect.set(target, key, newValue)
    if (result) {

    } else {

    }
  }
})
// 通过 Reflect 返回一个 布尔值，通过 Proxy 不能监听 设置值的时候，是否设置成功


objProxy.name = "jerry"
console.log(objProxy.name)