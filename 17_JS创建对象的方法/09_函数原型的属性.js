function foo() {

}

console.log(foo.prototype)  // {}

console.log(Object.getOwnPropertyDescriptors(foo.prototype))
/*
上打印结果为
{
  constructor: {
    value: [Function: foo],
    writable: true,        
    enumerable: false, // 可枚举性
    configurable: true     
  }
} 
*/

// prototype.constructor = 构造函数本身
console.log(foo.prototype.constructor)  // [Function: foo]
console.log(foo.prototype.constructor.name)  // foo

console.log(foo.prototype.constructor.prototype.constructor.prototype.constructor)
// 结果为 [Function: foo]  


// 2.我们也可以添加自己的属性
// foo.prototype.name = "hello word"
// foo.prototype.age = 12
// foo.prototype.height = 1.82
// foo.prototype.eating = function () { }

// var f1 = new foo()
// console.log(f1.name, f1.age)


// 3.直接修改整个 prototype 对象
foo.prototype = {
  // constructor: foo,
  name: "bob",
  age: 18,
  height: 1.75,
}

var f2 = new foo()
console.log(f2.name, f2.age)  // bob 18

// 真实开发中我们可以通过  Object.defineProperty 方式添加 constructor
Object.defineProperty(foo.prototype, "constructor", {
  enumerable: false,
  configurable: true,
  writable: true,
  value: foo
})

