/*
    为什么使用柯里化？
  在函数式编程中，我们其实往往希望一个函数处理的问题尽可能的单一，而不是将一大堆的处理
过程交给一个函数来处理。
  那么我们是否就可以将每次传入的参数在单一的函数中进行处理，处理完后在下一个函数中再使用
处理后的结果。

*/

// 单一职责原则
function add(x, y, z) {
  x = x + 2
  y = y * 2
  z = z * z
  return x + y + z
}
console.log(add(10, 20, 30))

function sum(x) {
  x = x + 2
  return function (y) {
    y = y * 2
    return function (z) {
      z = z * z
      return x + y + z
    }
  }
}
console.log(sum(10)(20)(30));


// 柯里化-逻辑复用 1
function summ(m, n) {
  return m + n
}
// 假如在程序中，我们经常需要把 5 和另外一个数字进行相加
console.log(summ(5, 10));
console.log(summ(5, 14));
console.log(summ(5, 110));

// 柯里化实现
function makeAdder(count) {
  return function (num) {
    return count + num
  }
}
console.log(makeAdder(5)(10));
var adder10 = makeAdder(10)
adder10(15)
console.log(adder10(15));


// 柯里化-逻辑复用 2

function log(date, type, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]:[${message}]`);
}
log(new Date(), "DEBUG", "查找到轮播图bug")
log(new Date(), "DEBUG", "查询菜单的bug")

// 柯里化-改进
var logg = date => type => message => {
  console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]:[${message}]`);
}

// 如果我现在打印的都是当前事件
var nowLog = logg(new Date())
nowLog("DEBUG")("查找到轮播图bug")
nowLog("FETURE")("新增了添加用户的功能")

var nowAndDebugLog = logg(new Date())("DEBUG")
nowAndDebugLog(("DEBUG", "查找到轮播图bug--logg"))
