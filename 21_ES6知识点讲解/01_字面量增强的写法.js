var name = "hello"
var age = 19

// 1.属性的简写
var obj = {
  name,
  age,

  // 2. 方法的简写
  foo: function () {
    console.log(this)
  },
  bar() {

  },
  baz: () => {
    console.log(this)
  },

  // 3.计算属性名
  [name + 123]: "hehehe"
}

obj.baz()
obj.foo()

// obj[name + 123] = "hahahah"
console.log(obj)  // hello123: 'hahahah'
