const name = "my"
const age = 18
function sum(num1, num2) {
  return num1 + num2
}

// 规范
module.exports = {
  name,
  age,
  sum
}

// 源码
// module.exports = { }
// exports = module.exports

/* 
  这种代码是错误的
  // exports 指向了 新的对象
  exports = {
    name,
    age,
    sum
  }
*/

// 第二种导出方式
/* exports.name = name
exports.age = age
exports.sum = sum */

// 最终导出的一定是 module.exports