function Person() {
  
}

console.log(Person.prototype) // {}
console.log(Object.getOwnPropertyDescriptors(Person.prototype)) // {constructor}

console.log(Person.prototype.__proto__) // 指向顶层原型
console.log(Person.prototype.__proto__.__proto__) // null
// Person 构造函数的 显示原型对象 的隐式原型对象 是 Object

console.log(Person.__proto__ === Person.prototype)  // false