// rest parameters
function sum(...args) {
  // args 是一个数组
  console.log(args);
}

sum(10) // [ 10 ]
sum(10, 20) // [ 10, 20 ]   
sum(10, 20, 30) //[ 10, 20, 30 ]


// 展开运算符 spread
var names = ["a", "b", "c"]
var newNames = [...names]

function foo(name1, name2, name3) {

}
foo(...names)