const obj = {
  name: "hello",
  age: 14
}
console.log(Object.keys(obj))  // [ 'name', 'age' ]
console.log(Object.values(obj))  // [ 'hello', 14 ]

// 可以传入其他的类型
console.log(Object.values(["a", "b", "c"]))  // [ 'a', 'b', 'c' ]
console.log(Object.values("word")) //[ 'w', 'o', 'r', 'd' ]