// 1.第一种方式：export 声明语句
/* export const name = "foo"
export const age = 15

export function foo() {
  console.log("foo function")
} */

// 第二种：export 导出 和 声明分开
const name = "hello"
const age = 18
function bar() {
  console.log("bar function")
}

/* // 2.第二种方式：不是一个对象，而是一种语法
export {
  name,
  age,
  foo
} */

// 3.第三种方式：第二种方式导出的时候起别名
export {
  name as fName,
  age as fAge,
  bar as fBar
}