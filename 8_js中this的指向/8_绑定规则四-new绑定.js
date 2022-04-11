/*
  使用 new 关键字来调用函数时，会执行如下的操作：
    1.创建一个全新的对象；
    2.这个新对象会被执行 prototype连接；
    3.这个新对象会绑定到函数调用的 this 上(this的绑定在这个步骤完成)
    4.如果函数没有返回其他对象那个，表达式会返回这个新对象那个；
*/

// 我们通过 new 关键字调用一个函数时(构造器)，这个时候 this 是在调用这个构造
// 器时创建出来的对象   this = 创建出来的对象
// 这个绑定过程就是 new 绑定

function Person(name, age) {
  this.name = name,
    this.age = age
}

var p1 = new Person("hello", 12)
// 相当于把 this对象 = "hello",12
// 通过 new 里面也会有一个 this
console.log(p1.name, p1.age);
// 第二次调用会在内部  再创建一个新的对象，然后把新的对象  赋值给 this
var p2 = new Person("word", 13)
console.log(p2.name, p2.age);