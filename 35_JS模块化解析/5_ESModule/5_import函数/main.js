// import { name, age, foo } from "./foo.js"
// 前面的代码在 导入之前，后面的代码都不会执行，也就是在前面的代码解析完之前

// console.log(name)

// 不会阻塞下面代码的执行，返回的结果是一个 Promise
import("./foo.js").then(res => {
  console.log("res:", res.name)
})

// 希望 异步执行
console.log("后续代码都是不会执行的~")

// ES11 新增的特新房
// meta 属性本身也是一个对象：（url："当前模块所在的路径"）
console.log(import.meta)