const name = "foo"
const age = 18

const foo = "foo value"
export {
  name,
  age,
  // foo as default // 默认只导出 foo 一个
}

export default foo;