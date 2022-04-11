const obj = {
  name: "hello",
  age: 18
}

/* Object.defineProperty(obj, "name", {
  set() { // 默认返回 undefined
    console.log("监听到obj对象的name属性被访问了")

  },
  get() {
    console.log("监听到obj对象的name属性被更改了")
  }
})
console.log(obj.name)
obj.name = "word" */
console.log(Object.keys(obj)) // [ 'name', 'age' ]

Object.keys(obj).forEach(key => {
  let value = obj[key]
  // console.log(key) // name,age
  Object.defineProperty(obj, key, {
    get() {
      console.log(`监听到obj对象的${key}属性被访问了`)
      return value
    },
    set(newValue) {
      console.log(`监听到obj对象的${key}属性被更改了`)
      value = newValue
    }
  })
})

obj.name = "jerry"
obj.age = 30

console.log(obj.name)
console.log(obj.age)

// 存在缺陷，如果我们象监听更加丰富的操作，比如新增属性、删除属性，那么
// defineProPerty 是无能 为力的。 它的设计初衷并不是 为了监听一个完整的对象。