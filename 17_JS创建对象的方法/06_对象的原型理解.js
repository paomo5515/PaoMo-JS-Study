/*
  JS 当中每一个对象都有一个特殊的内置属性 [[prototype]]，这
个特殊的对象可以指向另外一个对象，这个属性可以称之为 对象的原型(隐式原型)

  为什么称之为隐式原型？
 1.我们看不见
 2.我们不会去修改它
 3.不会直接去使用它，但是会使用底层原理使用 它
*/

var obj = { name: "hello" }  // [[prototype]]
var info = {} // [[prototype]]
/* 
 早期的 ECMA 是没有规范去查看 [[prototype]]
  浏览器 为了开发者能看到 [[prototype]]
  给对象中提供了一个属性，可以让我们 查看一下这个 原型对象(浏览器提供) 
  通过 __proto__ 访问，但是不能修改
 */
console.log(obj.__proto__) // 默认是一个 空的 {}
console.log(info.__proto__) // {}

var obj = { name: "pmo", __proto__: {} }


// ES5 之后提供的
console.log(Object.getPrototypeOf(obj)) // {}


// 原型的作用
// 当我们从一个对象中获取某一个属性时，它会触发 [[get]] 操作
// 1.在当前对象中，去查找对应的属性，如果找到就直接使用
// 2.如果没有找到，那么会沿着它的 原型链 去查找 [[prototype]]

// obj.age = 18
obj.__proto__.age = 14
console.log(obj.age)