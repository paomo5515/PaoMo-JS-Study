var obj = {
  name: "pmo",
  eaating: function () {
    console.log(obj.name + "在吃东西");
  },
  running: function () {
    console.log(obj.name + "在跑步");
  },
  studying: function () {
    console.log(obj.name + "在学习");
  }
}
obj.eaating()
obj.running()
obj.studying() 

//  从某种角度来说，开发中如果没有 obj，很多问题我们也是有解决方案的
// 但是没有 this，会让我们编写代码变得非常的不方便
var info = {
  name: "pmo",
  eaating: function () {
    console.log(info.name + "在吃东西");
  },
  running: function () {
    console.log(info.name + "在跑步");
  },
  studying: function () {
    console.log(info.name + "在学习");
  }
}