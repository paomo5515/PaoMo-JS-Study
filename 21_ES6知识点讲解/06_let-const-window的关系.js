// VO/GO/AO  这些都是早期的标准
var foo = "foo"
var message = "hello message"

console.log(window.foo)
console.log(window.message)

window.message = "哈哈哈"
console.log(message)

// VE 指向一个 对象 variables_:{} 它的类型是 VariableMap(HashMap) 里面有
// v8 不实现 window ，window 是由包含 v8 的浏览器实现的
// { hh  }
let hh = "hh"