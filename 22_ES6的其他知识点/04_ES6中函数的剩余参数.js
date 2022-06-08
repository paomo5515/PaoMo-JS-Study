function foo(m, n, ...args) {
  console.log(m, n)
  console.log(args)  // [ 40, 50 ] 
  console.log(arguments)  // [Arguments] { '0': 20, '1': 30, '2': 40, '3': 50 }
}
foo(20, 30, 40, 50)
// args(rest) 必须放到最后

/*
    arguments 和 ..args 的区别
  剩余参数只包含那些没有 对应形参的实参，而 arguments对象包含了 传给函数的所有实参。
  arguments 是一个对象（类数组），而 args 是一个真正的数组，可以进行数组的所有操作
  arguments 是早期的 ECMAScript 中为了方便去获取所有的参数提供的一个数据结构，而 args 参数
是ES6 中提供并且希望一次替代 arguments 的；

*/
