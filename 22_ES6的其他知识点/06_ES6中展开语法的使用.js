const names = ["aaa", "bbb", "ccc"]
const name = "hello"
const info = { name: "word", age: 18 }
// 1.函数调用时
function foo(x, y, z) {
  console.log(x, y, z)
}
foo.apply(null, names)  // aaa bbb ccc
foo(...names)  // aaa bbb ccc
foo(...name) // h e l

// 2.在构造数组时
const newNames = [...names, ...name]
console.log(newNames) // ["aaa", "bbb", "ccc","h","e","l","l","o"]

// 3.ES2018（ES9）构建对象字面量时使用
const obj = { ...info, address: "上海市" }
console.log(obj) // { name: 'word', age: 18, address: '上海市' }

const obj2 = { ...info, address: "上海市", ...names }
console.log(obj2) // { "0":"aaa", "1":bbb","2":"ccc", name: 'word', age: 18, address: '上海市' }

// 补充：展开运算符是一个浅拷贝