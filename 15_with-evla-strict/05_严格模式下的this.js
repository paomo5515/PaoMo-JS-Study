function foo() {
  console.log(this);
}

foo()

//  没有开启严格模式  独立函数调用 指向 window
//  开启了严格模式 独立函数调用 为 undefined

var obj = {
  name: "hello",
  foo: foo
}

obj.foo() // 严格模式和非严格模式下一样 {name: 'hello', foo: ƒ}


// setTimeout 的 this
// 非严格模式是 window
setTimeout(() => {
  console.log(this);
}, 1000)


// setTimeout 是黑盒子，是浏览器内部的
// 本来在严格模式下指向的是 undefined
setTimeout(function () {
  console.log(this);  // window
}, 1000)


// setTimeout(fn, delay){
//   fn.apply(window)
// } 



