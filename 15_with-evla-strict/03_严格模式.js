/*
    在 ECMAScript5 标准中, JS 提出了严格模式概念(Strict Mode)
  严格模式很好理解，是一种具有限制性的 JS 模式，从而使代码隐式的脱离了 "懒散(sloppy)模式"；
  支持严格模式的浏览器在检测到代码中有严格模式时，回一更加严格的方式对代码进行检测和执行；

    严格模式对正常的 JS 于一进行了一些限制：
  严格模式通过 抛出错误 来消除一些原有的静默错误（silent）错误；
  严格模式通让 JS 引擎在执行代码时可以进行更多的优化（不需要对一些特殊的语法进行处理）
  严格模式禁用了 在 ECMAScript未来版本中可能会定义的一些语法错误；
*/
// "use strict"

var message = "Hello Word"
console.log(message);

// 静默错误
true.foo = "abc"


function foo() {
  // 只给函数开启严格模式
  "use strict"
  true.foo = "abc"
}