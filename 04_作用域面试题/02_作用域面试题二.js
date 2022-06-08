function foo() {
  console.log(n); // undefined  
  //  在 foo 函数的 AO 对象中能查找到 n，就优先使用 自己的 n ，但是值为 undefined
  var n = 200
  console.log(n); // 200
}

var n = 100
foo()
