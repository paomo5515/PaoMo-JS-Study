const obj = {
  name: "obj",
  age: 18,
  friends: {
    name: "jerry"
  },
  hobbies: ["篮球", "足球"]
}

// 将 obj 对象的内容放到 info变量中
// 1.引用赋值
const info = obj
obj.age = 100
console.log(info.age) // 100

// 2.浅拷贝
const info2 = { ...obj }
obj.age = 99
console.log(info2.age) // 100


obj.friends.name = "jerry"
console.log(info2.friends.name) // jerry


// 3.stringify 和 parse 实现
const jsonString = JSON.stringify(obj)
