var obj1 = {} // 创建了一个对象
var obj2 = new Object()  // 创建了一个对象

function Person() {

}

var p = new Person()

var obj = {
  name: "hello",
  age: 18
}

// Object.prototype
console.log(obj.__proto__)  // [Object: null prototype] {}
console.log(Object.prototype)  // [Object: null prototype] {} 里面属性不可枚举
console.log(obj.__proto__ === Object.prototype)  // true

console.log(Object)  // [Function: Object]  浏览器中 ƒ Object() { [native code] }

console.log(Object.prototype)
console.log(Object.prototype.constructor)  // 指回 Object构造函数 [Function: Object]

console.log(Object.getOwnPropertyDescriptors(Object.prototype))

console.log(Object.prototype.__proto__)  // null
console.log(obj.__proto__.__proto__)  // null