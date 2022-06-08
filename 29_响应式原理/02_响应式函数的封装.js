// 封装一个响应式的函数
// 只要响应了 就放到数组中
let reactiveFns = []
function wachFn(fn) {
  reactiveFns.push(fn)
}

// 在开发中常见的是 对象的响应式
const obj = {
  name: "hello",
  age: 15
}

// 当 name 属性 发生变化时，就执行 需要响应的函数
wachFn(function () {
  const newName = obj.name
  console.log("--------")
  console.log(obj.name)
  console.log("++++++++")
})

wachFn(function () {
  console.log(obj.name, "demo function-----")
})
 
// 不需要响应
function bar() {
  console.log("普通的其他函数")
  console.log("这个函数不需要执行")
}

obj.name = "jerry"
reactiveFns.forEach(fn => {
  fn()
})