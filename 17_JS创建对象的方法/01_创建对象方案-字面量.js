var p1 = {
  name: "张三",
  age: 18,
  height: 1.88,
  address: "上海",
  eating: function () {
    console.log(this.name + "在吃东西");
  },
  running: function () {
    console.log(this.name + "在跑步");
  }
}

var p2 = {
  name: "李四",
  age: 14,
  height: 1.75,
  address: "北京",
  eating: function () {
    console.log(this.name + "在吃东西");
  },
  running: function () {
    console.log(this.name + "在跑步");
  }
}
var p3 = {
  name: "王五",
  age: 11,
  height: 1.67,
  address: "西安",
  eating: function () {
    console.log(this.name + "在吃东西");
  },
  running: function () {
    console.log(this.name + "在跑步");
  }
}