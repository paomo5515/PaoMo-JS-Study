function foo() {
  var a = b = 100 
  // 转成  
  // var a = 100
  // b = 100
}

foo()
console.log(a); // 报错
console.log(b); // 100

function bar() {
  var n = 10 // 有 var 关键字  就会加入到 bar 的 AO 中
  // 没有 var 就会在全局中创建
  m = 100
}

bar()
console.log(n); // 报错 n is not defined
// 函数执行完就会销毁

console.log(m); // 100