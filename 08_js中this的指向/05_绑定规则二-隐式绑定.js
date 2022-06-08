/*
  隐式绑定：通过某个对象进行调用的：
    也就是它的调用位置中，是通过某个对象发起的函数调用。
  
  隐式绑定有一个前提条件：
    必须在调用的对象内部有一个函数的引用(比如一个属性)
    如果没有这样的引用，在进行调用时，会找不到该函数的错误；
    正式这个引用，间接的将 this 绑定到了这个对象。
*/


// 案例一
function foo() {
  console.log(this);
}
// 对立函数调用
foo()

var obj1 = {
  name: "hello",
  foo
}
obj1.foo()  // {name: 'hello', foo: ƒ}


// 案例二
var obj2 = {
  name: "pmo",
  eating: function () {
    // 也可以写  obj.name
    console.log(this.name + "在吃东西");
  },
  running: function () {
    console.log(this.name + "在跑步");
  }
}
obj2.eating()
obj2.running()

var fn = obj2.eating
fn() // this是 window


// 案例三
var obj3 = {
  name: "obj3",
  foo: function () {
    console.log(this);
  }
}
var obj4 = {
  name: "obj4",
  bar: obj3.foo
}
obj4.bar() // obj4
