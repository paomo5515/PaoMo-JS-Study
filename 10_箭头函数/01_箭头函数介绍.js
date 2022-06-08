/*
  箭头函数和普通函数的区别：
  箭头函数不会绑定 this、arguments 属性。
  箭头函数不能作为构造函数来使用(不能和 new 一起来使用，会抛出错误)
  箭头函数不使用 this 的四种标准规则(也就是不绑定 this)，而是根据外层作用域来决定 this，直到找到为止。
*/

// 1.编写箭头函数
// () 参数
// => 箭头
// {} 函数的执行体
var nums = [10, 20, 30]

nums.forEach(function () {

})
nums.forEach(() => {

})

// 箭头函数常见的简写方法
// 简写一：如果参数只有一个，() 可以省略
nums.forEach(item => {
  console.log(item);
})

// 简写二：如果函数执行体只有一行代码，那么 {} 也可以省略
// 注意：并且它会默认将这行代码的 执行结果  作为返回值
nums.forEach(item => console.log(item))
var newNums = nums.filter(item => item % 2 === 0)

// 简写三：如果一个箭头函数，只有一行代码，并且返回一个对象，这个时候就可以简写成下面这样
var bar = () => {
  return { name: "hello", age: 15 }
} 
var bar = () => ({ name: "hello", age: 15 })