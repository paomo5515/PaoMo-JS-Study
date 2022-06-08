function foo(num1, num2, num3) {

  // console.log(num1, num2, num3);
  // 类数组对象(长的象是一个数组，本质上是一个对象)：arguments
  // 意味着它不是一个数组类型，而是一个对象类型。
  // 但是它拥有数组的一些特性，比如说 length，比如可以通过 index 索引来访问；
  // 但是它却没有数组的一些方法，如 forEach、map等。
  // 放在  AO 对象中

  // console.log(arguments)  // { '0': 10, '1': 20, '2': 30, '3': 40 }

  // 常见的 arguments 的作用是三个
  // 1.获取参数的长度
  console.log(arguments.length);

  // 2.根据索引值获取某一个参数
  console.log(arguments[2]);

  // 3.callee 属性，获取当前 arguments 所在数组的函数
  console.log(arguments.callee)
}

foo(10, 20, 30, 40)