var obj1 = {
  name: "obj1",
  foo: function(){
    console.log(this)
  }
}

var obj2 = {
  name: "obj2"
}

obj2.bar = obj1.foo
obj2.bar(); // {name: 'obj2', bar: ƒ}


(obj2.bar = obj1.foo)()  // 独立函数调用 {window}
