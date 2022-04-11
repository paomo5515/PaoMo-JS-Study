// 是纯函数
function foo(num1, num2) {
  return num1 * num2
}

// 不是纯函数，修改了 外界变量
var name1 = "aaa"
function bar() {
  console.log("bar其他的代码执行");
  name1 = "ccc"
}
bar()
console.log(name1);

// 不是纯函数，修改了传入的参数 
function baz(info) {
  info.age = 100
}

var obj = { name: "pmo", age: 18 }
// baz(obj)
console.log(obj);


// 是一个纯函数  返回一个新对象
function test(info) {
  return {
    ...info,
    age: 90
  }
}
console.log(test(obj));

// react的函数组件
function Hello(props) {

}

<Hello info="dda" />