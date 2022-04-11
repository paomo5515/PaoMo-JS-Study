var n = 100
function foo1() {
  console.log(n); // 第二次打印 100
}

function foo2() {
  var n = 200
  console.log(n); // 第一次打印 200
  foo1()
}

foo2()
console.log(n); // 第三次 100 