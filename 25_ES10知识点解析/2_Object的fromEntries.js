const obj = {
  name: "hello",
  age: 18,
  height: 1.78
}

const entries = Object.entries(obj)
console.log(entries)  // [ [ 'name', 'hello' ], [ 'age', 18 ], [ 'height', 1.78 ] ]

const newObj = {}
// for..in 拿到是 索引值
for (const entry of entries) {
  newObj[entry[0]] = entry[1]
}
console.log(newObj) // { name: 'hello', age: 18, height: 1.78 }

const newObj2 = Object.fromEntries(entries)
console.log(newObj2)  // { name: 'hello', age: 18, height: 1.78 }

// 2.Object,fromEntries 的应用场景
const queryStr = "name=hello&age=16&height=1.88"
const queryParams = new URLSearchParams(queryStr)
// URLSearchParams { 'name' => 'hello', 'age' => '16', 'height' => '1.88' }
console.log(queryParams)
for (const param of queryParams) {
  // [ 'name', 'hello' ]
  // [ 'age', '16' ]
  // [ 'height', '1.88' ]
  console.log(param)
}
const paramObj = Object.fromEntries(queryParams)
console.log(paramObj) // { name: 'hello', age: '16', height: '1.88' }