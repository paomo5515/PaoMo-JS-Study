function foo() {
  return function bar() {
    console.log("bar");
  }
}

var fn = foo()
fn()

/*
  AO 对象是在函数准备执行之前才创建的,编译时  没有创建
  在内存中的执行
  在堆内存创建 GO{String,window} ==> 在调用栈里面创建 全局执行上下文 ==> 在开始执行 全局代码的时候 
  ==> 先编译 GO{String,window, foo:0xa00, fn:undefined} ==> 在堆内存中创建 foo 函数对象 ==> 在全局执行
  上下文中 有VO: GO和 全局代码体 ==> 开始执行全局代码 ==> 执行到 第 7 行 ==> 创建 foo 的 AO对象
  ==> AO {bar:0xb00} ==> 创建 bar 的函数对象(在全局代码编译时不会创建) ==> 将GO var fn = 0xb00 
  ==> foo 函数执行完了 就会出栈 ==> 开始执行 第8 行 ==> 创建 bar 的函数执行上下文 ==> 创建 bar 的 AO 对象
  ==> 执行完了 所有的 AO 对象会被销毁; GO 对象不会被销毁
 */

  