const JSONString = '{"name":"obj","age":18,"friends":{"name":"jerry"},"hobbies":["篮球","足球"]}'
const info = JSON.parse(JSONString, (key, value) => {
  if (key === "age") {
    return value + 1
  }
  return value
})
console.log(info)