// 1.测试箭头函数中 this 的指向
var name = "hello"
var foo = () => {
  console.log(this);
}

foo()
var obj = {
  foo: foo
}
obj.foo()
foo.call("abc")
// 都是 window

// 2.应用场景

// 不使用箭头函数
var obj = {
  data: [],
  getDate: function () {
    // 将 obj 赋值给 this
    var _this = this
    // 发送网络请求，将结果放到上面 data 属性中
    setTimeout(function () {
      var result = ["abc", "bac", "cba"]
      _this.data = result
    }, 2000)
  }
}
obj.getDate()


// 使用箭头函数
var obj1 = {
  data: [],
  getDate: function () {
    // 发送网络请求，将结果放到上面 data 属性中
    setTimeout(() => {
      console.log(this);  // {data: Array(0), getDate: ƒ}
      var result = ["abc", "bac", "cba"]
      this.data = result
    }, 2000)
  }
}
obj1.getDate()


