// 空值合并运算，是一种运算符

const foo = undefined
const bar = foo || "default value"

console.log(bar)  // "default value"

const foo2 = 0 // ""
const bar2 = foo || "default value"
console.log(bar2)

// 判断是否有值，当 foo2 为 nudefined 或者为 null 的时候才 使用默认值
const bar3 = foo2 ?? "default value"
console.log(bar3)
