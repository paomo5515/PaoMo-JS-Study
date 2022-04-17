const obj = {
  name: "obj",
  age: 18,
  friends: {
    name: "jerry"
  },
  hobbies: ["篮球", "足球"],
  /* toJSON() {
    return "123456"
  } */
}

// 需求：将上面的对象转成 JSON 字符串
// 1.直接转化
const jsonString1 = JSON.stringify(obj)
console.log(jsonString1)

// 2.stringify 第二个参数，传入数组：设定哪些是需要转换的
const jsonString2 = JSON.stringify(obj, ["name", "friends"])
console.log(jsonString2)  // {"name":"obj","friends":{"name":"jerry"}}

// 2.1 传入回调函数
const jsonString3 = JSON.stringify(obj, (key, value) => {
  if (key === "age") {
    return value + 1  // 将 age 属性 +1 
  }
  return value
})
console.log(jsonString3)

// 3.stringify 第三个参数 space
// 传入 数字类型：表示 几个空格 缩进
// 传入 字符串类型：表示 几个字符串 缩进
const jsonString4 = JSON.stringify(obj, null, "---")
console.log(jsonString4)

// 4.如果对象中有 toJSON 方法，会将 stringify 方法替换为 toJSON()
// console.log(JSON.stringify(obj))