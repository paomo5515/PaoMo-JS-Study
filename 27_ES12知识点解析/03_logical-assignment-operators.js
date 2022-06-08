// 逻辑赋值运算  
// 1.||=  逻辑或 赋值运算，这里会判断
let msg = undefined
// msg = msg || "default value"
msg ||= "default value" // 和上面一样
console.log(msg)  // default value

// 2.&&=  逻辑与 赋值运算  &&
const obj = {
  name: "hello",
  foo() {
    console.log("foo函数被调用")
  }
}
// 一般前边值存在的话 再去使用这个值
obj.foo && obj.foo()

let info = {
  name: "info"
}
// 先判断有没有 info 这个值，在有值的情况下 会取出这个值 赋值给 info
// info = info && info.name
info &&= info.name
console.log(info) // info

// 3.??=  逻辑空 赋值运算，这里值判断 undefined null
let hh = ""
hh ??= "default"
console.log(hh) // ""