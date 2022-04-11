// ES6的代码块作用域
// 对 let/const/function/class 声明的类型是有效的
{
  let foo = "hello"
  function demo() {
    console.log("demo function")
  }
  class Person { }
}

// console.log((foo))  // 报错
// 不同的浏览器有不同实现的（大部分浏览器为了兼容以前的代码，让 function 是没有块级作用域的）
// demo() // demo function // 也会报错
// var p = new Person()  // 报错
