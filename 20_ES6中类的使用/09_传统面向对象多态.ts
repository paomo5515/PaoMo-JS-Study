/*
    维基百科对多态的定义：多态( polymorphism )指为不同的尸体提供统一的接口，或使用
  一个单一的符号来表示多个不同的类型。
    总结：不同的数据类型进行同一个操作，表现不同的行为，就是多态的体现。

    传统面向对象的多态是有三个前提：
    1.必须有继承（是多态的前提）
    2.必须重写（子类必须重写父类的方法）
    3.必须有父类引用指向子类对象
 */

// 形状
class Shape {
  getArea() {

  }
}

// 矩形
class Rectangle extends Shape {
  getArea() {
    return 100
  }
}

class Circle extends Shape {
  getArea() {
    return 200
  }
}

var r = new Rectangle()
var c = new Circle()

// 计算面积
function calcArea(shape: Shape) {
  console.log(shape.getArea())
}

calcArea(r)
calcArea(c)

export {}