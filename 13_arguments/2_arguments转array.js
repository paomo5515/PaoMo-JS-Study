function foo(num1, num2) {
  // 1.将所有参数 * 10
  var newArr = []
  for (let i = 0; i < arguments.length; i++) {
    newArr.push(arguments[i] * 10);
  }
  console.log(newArr);

  // 2.arguments 转 array 类型
  // 2.1 自己遍历 arguments 中所有的元素

  // 2.2 Array.prototype.slice 将 arguments 转成 array
  var newArr2 = Array.prototype.slice.call(arguments)
  console.log(newArr2);  // [ 10, 20, 30, 40 ]
  var newArr3 = [].slice.call(arguments)
  // [1, 2, 3].call([4, 5, 6])
  console.log(newArr3);  // [ 10, 20, 30, 40 ]

  // 2.3 ES6的语法
  var newArr4 = Array.from(arguments)
  console.log(newArr4);
  var newArr5 = [...arguments]
  console.log(newArr5);
}

foo(10, 20, 30, 40)


// 底层 Array 的 slice 的实现
Array.prototype.myslice = function (start, end) {
  // console.log(this);
  var arr = this
  // 如果不传的情况下，给一个默认值
  start = start || 0
  end = end || arr.length

  var newArr2 = [];
  for (let i = start; i < end; i++) {
    newArr2.push(arr[i]);
  }
  return newArr2
}

var myArray = Array.prototype.myslice.call(["aaa", "bbb", "ccc", "ddd"], 1, 3)
// var myArray = Array.prototype.myslice.call(arguments, 1, 3)
console.log(myArray)   // [ 'bbb', 'ccc' ]

var names = ["aaa", "bbb", "ccc", "ddd"]
names.slice(1, 3)
