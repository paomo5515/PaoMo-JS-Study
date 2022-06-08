/*
    在 ES6中，新增了一个 Proxy类，这个类从名字就可以看出来，是用于帮助我们创建一个代理的：
  也就是说，如果我们希望 监听一个对象的相关操作，那么我们可以先创建一个代理对象(Proxy对象)
  之后 对该对象的所有操作，都通过 代理对象来完成，代理对象可以监听我们想要对象原对象进行那些操作。
*/

const obj = {
  name: "hello",
  age: 19
}

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
  }
})

console.log(objProxy.name) // hello
console.log(objProxy.age) // 19

// 通过代理设置对象 
objProxy.name = "jerry"
objProxy.age = 30
console.log(obj.name) // "jerry"
console.log(obj.age)  // 30