var obj = {
  name: "obj",
  foo: function () {
    console.log(this);
  }
}
// obj.foo()  // {name: 'obj', foo: ƒ}

// call/apply 的显示绑定高于隐式绑定
obj.foo.call("abc")  // String {'abc'}
obj.foo.apply("abc")  // String {'abc'}


// 2.bind 和 隐式绑定
var bar = obj.foo.bind("cba")
bar()  // String {'cba'}


// 3.更加明显的比较
function fun() {
  console.log(this);
}
var objj = {
  name: "objj",
  fun: fun.bind("ccc")
}
objj.fun() // String {'ccc'}