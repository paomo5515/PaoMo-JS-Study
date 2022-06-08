// 给所有的函数添加一个 mycall 属性

Function.prototype.mycall = function (thisArg, ...args) {
  // console.log("mycall 被调用");

  // 在这里可以去执行调用的那个函数(foo)
  // 问题：需要可以获取到哪一个函数执行了 mycall
  // 1.获取需要被执行的函数
  var fn = this;

  // 2.对 thisArg 转成对象类型(防止它传入的是非对象类型)
  // 对 undefined 和 null 做出判断
  thisArg = (thisArg === null || thisArg === undefined) ? window : Object(thisArg)

  // 3.调用需要被执行的函数
  thisArg.fn = fn
  // 展开
  var result = thisArg.fn(...args)

  delete thisArg.fn

  // 4.将最终的结果返回出去
  return result
}

function foo() {
  console.log("foo函数被执行", this);
}

function sum(num1, num2) {
  console.log("sum函数被执行了", this, num1, num2);
  return num1 + num2
}

// 系统 call
// foo.call({})
// foo.call(undefined)
var result = sum.call("aaa", 20, 30)
console.log("系统调用", result);

// 自己的 call
// 默认进行了隐式绑定
// foo.mycall({name:"pmo"})
// foo.mycall(123)
// foo.mycall(0)
var myresult = sum.mycall("ccc", 10, 20)
console.log("mycall调用", myresult);

