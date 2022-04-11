
// 暂时性死区：
// 在一个代码块中，使用 let-const声明的变量，在生命之前，变量都是不可以被访问的。
// 我们将这种现象称之为 temporal dead zone(暂时性死区，TDZ)
var foo = "foo"

if (true) {
  console.log(foo) 

  let foo = "abc"
}

function bar() {
  console.log(aa)
  let aa = "aa"
}
bar()