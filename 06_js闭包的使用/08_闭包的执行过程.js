function foo() {
  var name = "hello"
  var age = 15
  function bar() {
    console.log(name);
    console.log(age);
  }
  return bar
}
var fn = foo()
fn()

fn = null // 避免内存泄漏
/*
编译时 ==> 创建 GO {string,foo:} ==> 创建 foo 函数对象 里面包含 父级作用域 函数体 和 VO
==> 将 GO 里面的{foo: 0xa00}  ==> 开始执行 foo 函数 ==> 创建 foo 的 AO 对象 {var name=undefined
var age = undefined bar:} ==> 创建 bar 的函数对象 0xb00 ==> bar 的函数对象 作用域 指向
foo 的 AO 对象{var name=undefined var age = undefined bar:0xb00} ==> 开始执行第二行
==> {var name="hello" var age = 15 bar:0xb00} ==> 执行第8 行 返回 bar, bar 是一个地址0xb00
fn = 0xb00 ==> foo 不会被销毁 ==> fn 指向着 foo 函数对象,并且 bar的函数对象的父级作用域还指向着
foo 的 AO 对象

 bar 的函数对象 不会被销毁,因为它有可能执行多次
 bar 函数对象和 foo 的 AO 对象应该被销毁但是没有销毁,这就造成内存泄漏

 */