function foo(){
  console.log(this);
}

foo.apply("abc")
foo.apply({})

// call/apply/bind 当前传入 null/undefined时，自动将 this 绑定到全局对象
foo.apply(null)  // window
foo.apply(undefined)  // window
var bar = foo.bind(null)
bar()  // window 