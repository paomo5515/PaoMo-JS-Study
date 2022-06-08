var obj = {
  name: "hello",
  age: 18
}

var info = Object.create(obj, {
  address: {
    value: "北京市",
    enumerable: true
  }
})
console.log(info) // { address: '北京市' } 
console.log(info.__proto__) // { name: 'hello', age: 18 }

console.log(info.address) // 在 info 自己身上
console.log(info.name, info.age)  // 在 info 的原型上


// hasOwnProperty方法 判断某个属性是否在自己身上 还是在原型上
console.log(info.hasOwnProperty("address"))  // true
console.log(info.hasOwnProperty("name"))  // false

// in 操作符 判断，不管是在当前对象还是 原型中返回的都是 true
console.log("address" in info)  // true
console.log("name" in info)  // true

for (const key in info) {
  console.log(key) // address name age
}

