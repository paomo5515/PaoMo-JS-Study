var obj = {
  name: "pmo",
  age: 18
}

// 第三个参数  属性描述符
Object.defineProperty(obj,"name",)

// 获取属性 
console.log(obj.name);

// 给属性赋值
obj.name = "hello"

// 删除属性
delete obj.name
console.log(obj);

// 需求：对属性进行操作时，进行一些限制
// 限制：不允许某一个属性被复制/不允许某个属性被删除/不允许某些属性在 遍历的时候被遍历出来

// 遍历属性
