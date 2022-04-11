var obj = {
  name: "hello"
}

console.log(obj.__proto__) // [Object: null prototype] {}
console.log(obj.__proto__ === Object.prototype)  // true

// 对象里面是有一个 __proto__ 对象： 隐式原型对象

function Object() {

}

function Function() {

}

var test = new Function()

function test() {

}

// Foo 是一个函数，那么它会有一个显示原型对象：Foo.prototype
// Foo.prototype 来自哪里？
// 答案：创建了一个函数，Foo.prototype = { constructor: Foo}

// Foo 是一个对象，那么它会有一个隐式原型对象：Foo.__proto__
// Foo.__proto_ 来自哪里？
// Foo 对象的 隐式原型属性 指向 Function 的显式原型
// 答案：new Function  Foo.__proto__ = Function.prototype
// Function.prototype = { constructor: Function}

console.log(Foo.prototype === Foo.__proto__)  // false
console.log(Foo.prototype.constructor) // [Function: Foo]
console.log(Foo.__proto__.constructor) // [Function: Function]
console.log(Foo.__proto__.__proto__) // [Object: null prototype] {}
console.log(Foo.prototype.__proto__) // [Object: null prototype] {}
console.log(Function.prototype === Function.__proto__)  // true

var Foo = new Function()


function Foo() {

}
