var obj = {
  name: "hello",
  age: 18,
  height: 1.88
}

// 对象的解构，可以改变顺序
var { name, age, height } = obj
console.log(name, age, height)

var { age } = obj
console.log(age) // 18

// 解构 + 重命名
var { name: newName } = obj
console.log(newName) // hello

// 默认值
var { address: newAddress = "上海市" } = obj
console.log(newAddress) // 上海市


// 函数使用解构
function getName({ name }) {
  console.log(name)
}
getName(obj)  // hello

// 如果对象中没有这个属性  给默认值 访问时会出现  undefined
var { xxx = "hahha" } = obj
console.log(obj.xxx)  // undefined