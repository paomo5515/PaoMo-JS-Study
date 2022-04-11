var obj = {
  name: "pmo",
  age: 18
}

// 禁止对象继续添加新的属性
Object.preventExtensions(obj)

obj.height = 1.75
obj.address = "上海市"

console.log(obj);

// 禁止对象配置或者和删除里面的属性
// for (const key in obj) {
//   Object.defineProperty(obj, key, {
//     configurable: false,
//     enumerable: true,
//     writable: true,
//     value: obj[key]
//   })
// }

Object.seal(obj)
delete obj.name
console.log(obj.name);


// 3.让属性不可以修改 {writeable:false}
Object.freeze(obj)
obj.name = "jerry"
console.log(obj.name);
