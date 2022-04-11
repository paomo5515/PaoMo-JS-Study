// 父类：公共的属性和方法
function Person(name, age, friends) {
  // this 就是 stu 对象
  this.name = name
  this.age = age
  this.friends = friends
}
Person.prototype.eating = function () {
  console.log(this.name + "eating")
}


// 子类：特有的属性和方法
function Student(name, age, friends, sno) {
  Person.call(this, name, age, friends)

  this.sno = 111
}

// 将父类的原型赋值给子类，作为子类的原型
Student.prototype = Person.prototype

Student.prototype.studying = function () {
  console.log(this.name + "studying")
}

var stu = new Student("hello", 15, ["jerry"], 116)
console.log(stu)
stu.eating()

// 从面向对象的角度是错误的，子类的所有 私有方法，都添加到了  父类身上，导致父类越来越大

