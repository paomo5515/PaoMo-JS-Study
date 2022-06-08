/*
    组合(Compose) 函数是在 JS 开发过程中一种对函数的使用技巧、模式：
  比如我们现在需要对某一个数据 进行函数的调用，执行两个函数 fn1 和 fn2，这两个函数是依次执行的。
  那么如果每次我们都需要进行两个函数的调用，草上就会显得重复；
  那么是否可以将这两个函数组合起来，自动依次调用呢？
  这个过程就是对函数的组合，我们称之为组合函数(Compose Function)
*/

function double(num) {
  return num * 2
}

function square(num) {
  return num ** 2
}

var count = 10
var result = square(double(count))
console.log(result);

function copposeFn(m, n) {
  return function (count) {
    return n(m(count))
  }
}
var newFn = copposeFn(double, square)
console.log(newFn(10));
