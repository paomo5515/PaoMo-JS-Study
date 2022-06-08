let m = 100

// 一代码
function foo() {
  console.log(m)
  console.log(m * 2)
  console.log("hello word")
}
// foo()

// 当 m 发生变化时，foo()，自动的重新执行一次

// 在开发中常见的是 对象的响应式
const obj = {
  name: "hello",
  age: 15
}

const newName = obj.name
console.log("--------")
console.log(obj.name)
console.log("++++++++")

obj.name = "jerry"