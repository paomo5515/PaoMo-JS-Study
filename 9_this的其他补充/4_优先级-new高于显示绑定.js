// 结论: new关键字不能和 apply/call一起来使用


// new 的优先级 高于 bind 的优先级
function foo(){
  console.log(this);
}
var bar = foo.bind("aaa")
var obj = new bar()  // foo {}
 

// bind的优先级高于 call
foo.bind("abc").call("def")   // String {'abc'}

// new 绑定 > 显示绑定(apply/call/bind) > 隐式绑定(obj.foo) > 默认绑定(对立函数调用) 