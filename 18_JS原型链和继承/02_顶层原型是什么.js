var obj = {
  name: "hellow"
}

console.log(obj.adderss)  // undefined

// 到底找到哪一层对象之后停止继续查找了？
console.log(obj)
console.log(obj.__proto__)  // 字面量对象 obj 的原型是 {}， 这个原型就是最顶层的原型

// obj.__proto__ => [Object: null prototype] {}
console.log(obj.__proto__.__proto__)  // null

