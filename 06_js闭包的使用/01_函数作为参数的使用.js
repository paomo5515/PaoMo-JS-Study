/*
  在 JS 中，函数是非常重要的，并且是一等公民。
    那么就意味着函数的使用是非常灵活的；
      函数可以作为另外一个函数的参数，也可以作为另外一个函数
      的返回值来使用；
    自己编高阶函数；
    使用内置的高阶函数
 */

function foo(params) {
  console.log("foo", params);
}
foo(123)

// 将函数作为另外一个函数的参数
function bar(aaa) {
  aaa()
}

function baz() {
  console.log("bar");
}
bar(baz)


function calc(num1, num2, calcFn) {
  console.log(calcFn(num1, num2));
}

function add(num1, num2) {
  return num1 + num2
}

function sub(num1, num2) {
  return num1 - num2
}

function mul(num1, num2) {
  return num1 * num2
}

var m = 20
var n = 30
// 加
calc(m, n, add)
// 减
calc(m, n, sub)
// 乘
calc(m, n, mul)