
function foo(m, n, x) {
  console.log(m, n, x)
}
foo("hello", "word")

// 调用方式二：标签模板字符串
foo`javascript hhaha`  // [ 'javascript hhaha' ] undefined

const name = "pmo"
const age = 18
// 第一个参数是模板字符串中的整个字符串，只是切割成多份，放到了一个数组
// 第二个参数是模板字符串中的 第一个 ${}
foo`hello${name}Wo${age}ll`  // [ 'hello', 'Wo', 'll' ] pmo 18