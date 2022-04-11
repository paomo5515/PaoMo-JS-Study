function Person(name, age, height, address) {
  this.name = name
  this.age = age
  this.height = height
  this.address = address
}
Person.prototype.eating = function () {
  console.log(this.name + "在吃东西")
}

var p1 = new Person("hello", 12, 1.45, "北京市")
var p2 = new Person("word", 13, 1.56, "上海市")

p1.eating()
p2.eating()