function Person(name, age, height, address) {
  this.naem = name
  this.age = age
  this.height = height
  this.address = address
  this.eating = function () {
    console.log(this.name + "在吃东西")
  }
}

var p1 = new Person("张三", 18, 1.77, "北京市")
console.log(p1)  // Person { "张三", 18, 1.77, "北京市" }

var p2 = new Person("李四", 19, 1.87, "上海市")
console.log(p2)

console.log(p1.eating === p2.eating)  // false
// 每次都会创建新的  eating 的函数对象