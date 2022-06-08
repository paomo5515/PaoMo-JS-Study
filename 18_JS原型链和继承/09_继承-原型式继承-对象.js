var obj = {
  name: "hello",
  age: 18
}


// 原型式继承函数
// 方法一： 接收一个对象
function createObject(o) {
  var newObj = {}
  Object.setPrototypeOf(newObj, o)
  return newObj
}

// 方法二 当时实现没有  setPrototypeOf 方法
function createObject2(o) {
  function Fn() { }
  Fn.prototype = o
  var newObj = new Fn()
  // newObj.__proto__ = o 其实就是
  return newObj
}


// 希望 info 的原型指向 obj 对象
// var info = createObject2(obj)

// 最新 ECMA 的 Object.create 方法
var info = Object.create(obj)  // 内部都是一样的
console.log(info)  // {}
console.log(info.__proto__)  // { name: 'hello', age: 18 }

