
var namef = "hello"

foo(123)
function foo(num) {
  console.log(m);
  var m = 10
  var n = 23

  function bar() {
    console.log(namef); // hello
  }
  bar()
}

/*
  以上代码执行的过程
  编译完成后 开始执行 foo 函数，将 foo 放入到 执行上下文栈 中，等到 foo 的  AO 被
  创建时 bar 就会被编译，就会开辟空间存储 bar 函数 里面有父级作用域 和函数执行体，
  开始执行 foo 函数 ==> 执行到 bar() 的时候，就会在创建一个函数执行上下文 ==> 再创建
  自己的 AO 对象 ==> 开始执行 bar 里面的内容 ==> 开始查找 namef ==> 沿着作用链查找 ==> bar执行完了
  bar 就会出找 ==> bar 的 AO 就会销毁 ==> foo 也就执行完了 ==> foo 出栈 ==> foo 的 AO 也就会被销毁
 */