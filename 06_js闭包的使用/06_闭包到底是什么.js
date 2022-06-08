
function foo2() {
  var name = "hello"
  function bar2() {
    console.log("bar", name);
  }
  return bar2
}

var fn2 = foo2()
fn2()

/*
  先编译 ==> 创建全局 GO {string, name: undefined,foo2:指向函数对象,fn2:undefined}
   ==> 创建 foo2 函数执行上下文 ==> 创建 foo2的 AO 对象 {name: undefined,bar2: 0xb00} ==> 
   创建 bar2 函数对象 ==> 执行 foo2 的函数体 {name: "hello"} ==> 全局GO{var fn2 = 0xb00}
   ==> foo2 执行完 ==>出栈 ==> 开始执行 10行 ==> 创建 bar2 的函数执行上下文 ==> 创建 bar2的
   AO 对象,VO:AO ==> 执行 bar的函数体 ==> {console.log("bar", name);} ==> 按照作用域查找 变量
   ==> name ==> 去父级作用域查找 ==> 去 foo2 的 AO 对象里面找,
   在正常情况下 foo2函数已经执行完了,就会销毁,但是它可以访问 name ,所以 不会被销毁
*/