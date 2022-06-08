// ES5
// 声明对象的字面量
var obj = {
  name: "hello"
}

// ES5 中没有块级作用域
// 代码块
{
  // 表达式
  var foo = "foo"
}
console.log(foo)

// 在 ES5 只有两个东西会形成作用域
// 1.全局作用域
// 2.函数作用域

// 存在三个作用域，外面是访问不到里面的，里面能访问到外面
function bar() {
  function demo() {
  
  }
}
