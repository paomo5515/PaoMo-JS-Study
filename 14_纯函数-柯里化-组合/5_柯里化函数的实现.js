function add1(x, y, z) {
  return x + y + z
}

function add2(x, y, z) {
  x = x + 2
  y = y * 2
  z = z * 2
}

function makeAdder(count) {
  count = count * count
  return function (num) {
    return count + num
  }
}

function log(date, type, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]:[${message}]`);
}


// 柯里化函数的实现
function pmoCurrying(fn) {
  function curried(...args) {
    // 判断当前 已经接收到的 参数的个数，和参数本身需要的参数是否已经一致了
    // 1.判断已经传入的参数 大于等于 需要的参数时， 就执行函数
    if (args.length >= fn.length) {
      // 注意 this
      // fn(...args)
      // fn.call(this, ...args)
      return fn.apply(this, args)
    } else {
      // 没有达到个数时，需要返回一个新的函数，继续来接收参数
      return function (...args2) {
        // 接收到参数后，需要递归调用 curried
        return curried.apply(this, [...args, ...args2])
      }
    }
  }
  return curried
}

var curryAdd = pmoCurrying(add1)
curryAdd(10)(20)(30)
curryAdd(10, 20)(30)
curryAdd(10, 20, 30)
console.log(curryAdd(10)(20)(30))
console.log(curryAdd(10, 20)(30))
console.log(curryAdd(10, 20, 30))

function foo(x, y, z, m, n) {

}
console.log(foo.length);  // 5