var obj = {
  name: "hello",
  age: 18
}

// 属性描述符是一个对象
Object.defineProperty(obj, "height", {
  // 有很多的配置
  value:1.88
})
console.log(obj);  // { name: 'hello', age: 18 }
console.log(obj.height);  // 1.88  