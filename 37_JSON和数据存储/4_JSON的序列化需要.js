const obj = {
  name: "obj",
  age: 18,
  friends: {
    name: "jerry"
  },
  hobbies: ["篮球", "足球"]
}

// 将对象数据存储 localStorage
// localStorage.setItem("obj", obj)
console.log(localStorage.getItem("obj"))  // [object Object]

// 将 obj 对象转成 JSOM 格式的字符串
const objString = JSON.stringify(obj)
// {"name":"obj","age":18,"friends":{"name":"jerry"},"hobbies":["篮球","足球"]}
console.log(objString)

localStorage.setItem("obj", objString)


const jsonString = localStorage.getItem("obj")
// 将 JSON 格式的字符串转回对象
const info = JSON.parse(jsonString)
console.log(info)
// 1.43.48