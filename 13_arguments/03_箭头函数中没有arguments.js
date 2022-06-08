// 箭头函数中没有 arguments，如果没有则去上层作用域中寻找
var foo = () => {
  // 在浏览器中 报错 arguments is not defined
  console.log(arguments);

  // 在  node 中有 arguments
}
foo()

function bar() {
  var fun = () => {
    console.log(arguments);  // [Arguments] { '0': 123 }
  }
  return fun
}

var fn = bar(123)
fn()

var ff = (num1, num2, ...args) => {
  console.log(args);  // [ 30, 40 ]
}
ff(10, 20, 30, 40)