function foo() {
  var name = "why"
  var age = 15

  function bar() { 
    debugger;
    console.log(name);
  }
  return bar
}
var fn = foo()
fn()

//没有用到 age ,age 会被销毁