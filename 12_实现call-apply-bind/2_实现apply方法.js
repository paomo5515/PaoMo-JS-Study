Function.prototype.myapply = function (thisArg, argArray) {
  // 1.获取需要执行的函数
  var fn = this

  // 2.获取需要绑定 this 的值
  // 判断传入参数，防止 非对象类型的值传入进来
  thisArg = (thisArg === null || thisArg === undefined) ? window : Object(thisArg)

  thisArg.fn = fn
  // 如果只传了一个参数 argArray = undefined  // ...argArray 就会报错
  var result;
  /* if (argArray !== undefined) { // 没有值
    result = thisArg.fn(...argArray)
  }else {
    result = thisArg.fn()
  } */

  // 方法二
  /* argArray = argArray !== undefined ? argArray : []
  //没有值相当于遍历  空的数组 */

  // 方法三
  argArray = argArray || []
  result = thisArg.fn(...argArray);
  delete thisArg.fn

  return result
}

function foo() {
  console.log("foo函数被执行了", this);
}
// 一个参数
function foo2(num1) {
  return num1
}

// 没有参数
function bar() {
  console.log("bar函数执行了", this);
}

function sum(num1, num2) {
  console.log(num1, num2, this);
  return num1 + num2
}

// 系统的 apply
// foo.apply("123")
// var result = sum.apply("aaa", [1, 2])
// console.log(result);

// // 自己的 myapply
// // foo.myapply("456")
// var myresult = sum.myapply("bbb", [3, 4])
// console.log(myresult);

bar.myapply({})