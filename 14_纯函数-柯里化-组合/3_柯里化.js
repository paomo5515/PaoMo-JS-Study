/*
    维基百科的定义：
  是把接收多个参数的函数，变成 接受一个单一参数(最初函数的第一个参数)的函数，并且
返回接收余下的参数，而且返回结果的新函数技术；
  柯里化声称 如果你固定某些参数，你将得到接受余下参数的一个函数；

  总结：
    只传递给函数一部分参数来调用它，让它返回一个函数去处理剩余的参数；
    这个过程就称为柯里化。
*/


function add(x, y, z) {
  return x + y + z
}
var result = add(10, 20, 30)
console.log(result);

function sum(x) {
  return function (y) {
    return function (z) {
      return x + y + z
    }
  }
}
var result1 = sum(10)(20)(30)
console.log(result1);

// 简化柯里化的代码
var sum2 = x => y => z => {
  return x + y + z
}

console.log(sum2(10)(20)(30));

var sum3 = x => {
  return y => {
    return z => {
      return x + y + z
    }
  }
}
console.log(sum3(10)(20)(30));