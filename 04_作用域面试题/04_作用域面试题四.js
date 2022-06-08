var a = 100
function foo() {
  console.log(a); //undefined
  // 在 扫描foo 函数的时候 foo 函数的 AO里面也有 {a:undefined} 
  return
  var a = 200
}
foo()