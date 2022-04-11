{

}

// if 语句的代码也是块级作用域
if (true) {
  var foo = "foo"
  let bar = "bar"
}
console.log(foo)  // foo
// console.log(bar) // 报错

// switch 语句的代码也是块级作用域
var color = "red"
switch (color) {
  case "red":
    var ff = "ff"
    let mm = "mm"
}
console.log(ff) // ff
// console.log(mm) // 报错

// for 语句的代码也是块级作用域
for (var i = 0; i < 5; i++) {
  // console.log("hello word" + i)
}
console.log(i)

for (let m = 0; m < 8; m++) {
  
}
// console.log(m) // 报错

