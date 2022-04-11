const name = "why"
const age = 18
const height = 1.87

// ES6 模板字符串 ``
const message = `my nam is ${name}, age is ${age}, height is ${height}`
console.log(message)

function doubleAge() {
  return age * 2
}

const info = `doubleAge age is ${doubleAge()}`
console.log(info)  // doubleAge age is 36



