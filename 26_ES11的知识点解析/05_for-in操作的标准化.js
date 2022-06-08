// for..in 标准化
const obj = {
  name: "hello",
  age: 18
}

// 遍历对象  就是 key
for (const item in obj) {
  console.log(item) // name age
}

// 遍历对象报错
const arr = [1, 2, 3, 4]
for (const iten of arr) {
  console.log(iten)  // 1 2 3 4 
}

