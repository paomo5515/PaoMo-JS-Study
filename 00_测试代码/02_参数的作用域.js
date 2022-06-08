var x = 0

// 当函数有默认值的情况时，会形成一个新的作用域，这个作用域用于保存参数的值
function foo(x, y = function () {
  x = 3;  // 改变的是 foo 函数中的 x
  console.log(x);  // 2.3
}) {
  console.log(x);  // 1.undefined
  var x = 2
  y()
  console.log(x); // 3.2
}

foo()
console.log(x);  // 4.0