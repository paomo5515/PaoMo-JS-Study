function foo() {
  console.log(this);
}
// 1.直接调用这个函数
foo()

// 2.创建一个对象，对象中的函数指向 foo
var obj = {
  name: "hello",
  foo: foo
}

obj.foo()


// 3.apply 调用
foo.apply("abc")

// this 指向的什么，跟它函数所处的位置是没有关系的
// 跟函数被调用的方式是有关系的