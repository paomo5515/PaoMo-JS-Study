function foo() {
  console.log(this);
}

// foo.call("aaa")
// foo.call("aaa")

// bind 返回一个函数
// 默认绑定和显示绑定 bind 冲突，优先级(显示绑定)
var newFoo = foo.bind("aaa")
newFoo()
newFoo()