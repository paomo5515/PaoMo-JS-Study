// 父类：公共的属性和方法
function Person(name) {
  this.name = "hello"
  this.frends = []
}
Person.prototype.eating = function () {
  console.log(this.name + "eating")
}

var p = new Person()
Student.prototype = p

// 子类：特有的属性和方法
function Student(sno) {
  this.sno = 111
}

Student.prototype = new Person()
Student.prototype.studying = function () {
  console.log(this.name + "studying")
}

var stu = new Student()
console.log(stu.name)
stu.eating()

// 原型链实现继承的弊端：
// 1.打印 stu 对象，继承属性是看不到的
console.log(stu)  // Person { sno: 111 } 看不见 name 属性

// 2.创建两个 stu 的对象
var stu2 = new Student()
var stu3 = new Student()

// 直接丢修改象上的属性，是给本对象添加了一个新的属性
this.name = "tom"
console.log(stu2.name) // hello
// 获取引用，修改引用中的值，会相互影响
stu2.frends.push("jerry")

console.log(stu2.frends)  // [ 'jerry' ]
console.log(stu3.frends) // [ 'jerry' ]

// 3. 在前面是实现类的时候都没有传递参数
var stu3 = new Student("dog", 122)
