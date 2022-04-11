/*
    在 ES6中，新增了一个 Proxy类，这个类从名字就可以看出来，是用于帮助我们创建一个代理的：
  也就是说，如果我们希望 监听一个对象的相关操作，那么我们可以先创建一个代理对象(Proxy对象)
  之后 对该对象的所有操作，都通过 代理对象来完成，代理对象可以监听我们想要对象原对象进行那些操作。
*/

const obj = {
  name: "hello",  // 数据属性描述符
  age: 19
}

// 变成一个 访问属性描述符，两个对象变成不一样了，所以这样操作不好
// Object.defineProperty(obj, name, {

// })

// 第二个参数：捕获器对象
const objProxy = new Proxy(obj, {
  // 获取值时的捕获器，会自动回调
  // target 被代理对象(obj)，key 是属性
  get(target, key) {
    console.log(`监听到对象的${key}属性被访问了`, target)
    // { name: 'hello', age: 19 }
    return target[key]
  },

  // 设置值时的捕获器，会自动回调
  set(target, key, newValue) {
    console.log(`监听到对象的${key}属性被设置`, target)
    target[key] = newValue
  },

  // 监听 in 的捕获器
  has(target, key) {
    console.log(`监听到对象的${key}属性in操作`, target)
    return key in target
  },

  // 监听 delete 的捕获器
  deleteProperty(target, key) {
    console.log(`监听到对象的${key}属性删除操作`, target)
    delete target[key]
  }
})

// 监听 属性在不在 对象里面， in 操作
console.log("name" in objProxy)  // true

// delete 操作
delete objProxy.name
