// ES5以及之前给参数默认值
// 缺点写起来麻烦，并且代码阅性比较差
// 有 bug
function foo(m, n) {
  m = m || "aa"
  n = n || "bb"
  console.log(m, n)
}

foo(0, "")  // aa bb

// ES6可以给函数的参数提供默认值
function bar(m = "cc", n = "dd") {
  console.log(m, n)
}
bar(0, "")

// 对象参数和默认值 及 解构
function printInfo1(info = { name: "hello", age: 18 }) {
  console.log(info.name, info.age)
}
function printInfo2({ name, age } = { name: "hello", age: 18 }) {
  console.log(name, age)
}
printInfo2({ name: "word", age: 56 })

// 另外一种写法，以空对象为参数，默认值为 name = "jerry", age = 78
function printInfo3({ name = "jerry", age = 78 } = {}) {
  console.log(name, age)
}
printInfo3()

// 有默认值得形参最好放到最后
function baz(x, y, z = 30) {
  console.log(x, y, z)
}
baz(10, 20) // 10 20 30

// 没有默认值  baz(x, y, z)
console.log(bza.length)  // 3 
// baz(x, y, z = 30) 并且它后面的默认值开始  
// 都不放入 length 中 如 (x, y, z = 0, m) length 还是2
console.log(bza.length)  // 2