// 工厂模式：工厂函数
function createPerson(name, age, height, address) {
  var p = {}
  p.name = name
  p.age = age
  p.height = height
  p.address = address
  p.eating = function () {
    console.log(this.name + "在吃东西")
  }
  p.running = function () {
    console.log(this.name + "在跑步")
  }
  return p
}

var p1 = createPerson("张三", 18, 1.75, "广州市")
var p2 = createPerson("王五", 15, 1.65, "上海")
var p3 = createPerson("李四", 11, 1.45, "西安")


// 工厂模式的缺点 看不到具体对象真实的类型  Person 和 Dog
console.log(p1, p2, p3)
