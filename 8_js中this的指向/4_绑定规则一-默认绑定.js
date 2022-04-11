/*
  什么情况下使用默认绑定？  独立函数调用。
独立的函数调用我们可以理解成函数没有绑定到某个对象上进行调用。
*/

// 默认绑定：独立函数调用
// 案例一
function foo() {
  console.log(this); // window
}
foo()

// 案例二
function foo1() {
  console.log(this);// 3.window
}
function foo2() {
  console.log(this);// 2.window
  foo1()
}
function foo3() {
  console.log(this); // 1.window
  foo2()
}
foo3()

// 案例三
var obj = {
  name: "hello",
  bar: function () {
    console.log(this);
  }
}
var bar1 = obj.bar
bar1() // window 看调用的时候有没有主体，而不是定义的时候


// 案例四
function baz() {
  console.log(this); // window
}
var objj = {
  name:"word",
  baz:baz
}
var bax = objj.baz
bax()

// 案例五
function jkl(){
  function fun() {
    console.log(this);
  }
  return fun
}
var ff = jkl()
ff()  // window