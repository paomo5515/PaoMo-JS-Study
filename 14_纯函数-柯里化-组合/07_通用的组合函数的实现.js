function pmoCompose(...fns) {
  var length = fns.length
  for (let i = 0; i < length; i++) {
    if (typeof fns[i] !== "function") {
      throw new TypeError("要求都是函数类型")
    }
  }
  return function (...args) {
    var index = 0
    var result = length ? fns[index].apply(this, args) : args
    while (++index < length) {
      result = fns[index].call(this, result)
    }
    return result
  }

}

function double(m) {
  return m * 2
}

function square(n) {
  return n ** 2
}

var newFn = pmoCompose(double, square)
console.log(newFn(10));