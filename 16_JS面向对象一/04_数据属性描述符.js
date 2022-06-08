// name 和 age 虽然没有使用 属性描述符来定义，但是它们也是具有对应的特性的
// value: 赋值的 value
//  configurable: true,
var obj = {
  name: "pmo",
  age: 18
}

// 数据属性描述符
// 用了属性描述符，那么会有默认的特性
Object.defineProperty(obj, "address", {
  // 很多配置
  value: "北京市",
  // 该属性不可删除，不且修改
  configurable: false,
  // 不可枚举
  enumerable: false,
  // 该特性属性是否是可以  写入值的
  writable: false // 默认值是 false
})

delete obj.name
console.log(obj.name);

delete obj.address
console.log(obj.address);

// 测试 enumerable 的作用
for (var key in obj) {
  console.log(key);
}
console.log(Object.keys(obj));

obj.address = "上海市"
console.log(obj.address) // undefined