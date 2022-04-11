function Person() {
  
}

var p1 = new Person()
var p2 = new Person()

console.log(p1.__proto__ === Person.prototype)  // true
// 改变 p1 p2 的对象原型  就相当于改变了  Person 函数的原型对象

// p1.name = "hello"
// p1.__proto__.name = "word" // 相当于给  Person 函数的原型对象

// Person.prototype.name = "tom"
p2.__proto__.name = "jerry"

console.log(p1)
console.log(p1.name)

var a = {name:'hello'}
console.log(a)