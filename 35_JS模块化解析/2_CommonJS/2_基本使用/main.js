// 使用另外一个模块导出的对象，那么就需要进行导入 require
// const my = require("./my.js")
// const { aaa, bbb } = require("./my.js")
const { name, age, sum } = require("./my.js")

// console.log(aaa)
// console.log(bbb)

console.log(name)
console.log(age)
console.log(sum(10, 20))