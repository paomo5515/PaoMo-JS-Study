/*
    如果我们有一个函数，在调用这个函数时，如果出现了错误，那么么我们应该是去修复这个错误。
*/

function sum(num1, num2) {
  // 当传入的参数的类型不正确时，应该告知调用者一个错误
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw "parameters is error type~"
  }
  return num1 + num2
}

// 调用者（如果没有对错误进行处理，那么程序会直接终止）
// console.log(sum({ name: "hehhh" }, true))
console.log(sum(10, 20))