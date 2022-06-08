var message = "Hello Word"
console.log(message);

// with 语句：可以形成自己的作用域
var obj = { name: "hello", age: 20, message: "obj message" }

function foo() {
  function bar() {
    with (obj) {
      // 先去 obj 里面查找
      console.log(message);  // obj message
    }
  }
  bar()
}
foo()

var info = {name: "jerry"}
with(info){
  console.log(info);  // {name: "jerry"}
}