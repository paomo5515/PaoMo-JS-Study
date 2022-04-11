function foo() {
  /* 
    // 模拟 new 关键字
    var moni = {}
    this = moni

    this.__proto__ = foo.prototype 
  */
}


// 函数也是一个对象，函数作为对象来说，它也是有 [[prototype]] 隐式原型的
console.log(foo.__proto__)  // {}

// 函数因为它是一个函数，所以它还会多出一个 显式原型 的属性：prototype，本
// 身里面就存在的 (函数自带的)
console.log(foo.prototype)  // {}

var f1 = new  foo()
var f2 = new  foo()


console.log(f1.__proto__ === foo.prototype)  // true
f2.__proto__ = foo.prototype  // 内部会自动做的
