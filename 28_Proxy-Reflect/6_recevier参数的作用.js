const obj = {
  // this =>> obj
  _name: "hello",
  get name() {
    return this._name
  },
  set name(newValue) {
    this._name = newValue
  }
}

// 监听  get set 
const objProxy = new Proxy(obj, {
  // 不写 receiver，这样写 会绕过 objProxy，只对 name做了拦截，没有拦截 _name
  get(target, key, receiver) {  // receiver 是代理对象 Proxy {_name:"hello"}
    console.log("get方法被访问=====", key, receiver)
    // receiver 改变 原始对象的 this
    return Reflect.get(target, key, receiver)
  },
  set(target, key, newValue, receiver) {
    console.log("set方法被访问-----", key)
    Reflect.set(target, key, newValue, receiver)
  }
})

objProxy.name = "jerry"
console.log(objProxy.name)

