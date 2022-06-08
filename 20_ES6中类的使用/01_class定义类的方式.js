// 类的声明
class Person {

}

// 类的表达式
var Animal = class {

}

// 函数的声明
function foo() {
  
}
// 函数的表达式
var foo = function () {
  
}

console.log(Person.prototype)  // {}
console.log(Person.prototype.__proto__)  // [Object: null prototype] {}
console.log(Person.prototype.__proto__.__proto__) // null
console.log(Object.prototype.__proto__)  // null
console.log(Person.prototype.constructor) // [class Person]
console.log(typeof Person) // function

var p = new Person()
console.log(p.__proto__ === Person.prototype)  // true
console.log(p.__proto__.__proto__) // [Object: null prototype] {}

var h = {}
console.log(h.__proto__.__proto__)  // null