var name = "window"

var person1 = {
  name: "person1",
  foo1: function () {
    console.log(this.name);
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name);
    }
  },
  foo4: function () {

    return () => {
      console.log(this.name);
    }
  }
}

var person2 = { name: "person2" }

person1.foo1() // person1
person1.foo1.call(person2) // person2

person1.foo2() // window  // foo2 的父级作用域是 window  因为 person1 是对象
person1.foo2.call(person2) // window

person1.foo3()(); // window 独立函数调用
person1.foo3.call(person2)(); // window
person1.foo3().call(person2) // person2 因为最终调用返回函数式，使用的是显示绑定

person1.foo4()();  // person1 上层作用域 this 是 person1
person1.foo4.call(person2)(); // person2 商城作用域被显示的绑定了 person2
person1.foo4().call(person2) // person1