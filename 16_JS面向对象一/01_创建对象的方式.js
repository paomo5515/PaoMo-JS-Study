// 创建一个对象，对某一人进行抽象(描述)

// 创建方式一：通过 new Object() 创建
var obj = new Object()
obj.name = "pmo"
obj.age = 18
obj.height = 1.67
obj.running = function () {
  console.log(this.name + "在跑步~");
}

// 创建方式二：字面量形式
var info = {
  name: "hello",
  age: 18,
  eating: function () {
    console.log(this.name + "在吃东西");
  }
} 