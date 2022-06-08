function foo() {
  console.log("foo")
}

// foo 是一个普通函数
foo()

// 换一种方式来调用 foo函数：通过 new 关键字去调用一个函数，那么这个函数就是一个构造函数了
new foo  // foo 可以不写 小括号 写括号是为了 传参


/*
    当我们通过 new 去调用一个函数时，和通过普通的调用有什么区别呢？
  1.在内存中创建一个新的对象（空对象）；var v = {} 
  2.这个对象内部的 [[prototype]] 属性会被赋值为 该构造函数的 prototype 属性；
  3.构造函数内部的 this，会指向创建出来的新对象； this = v
  4.执行函数的内部代码（函数体代码）
  5.如果构造函数没有返回非空对象，则返回创建出来的新对象； return this
*/

var f1 = new foo
console.log(f1) // foo {}