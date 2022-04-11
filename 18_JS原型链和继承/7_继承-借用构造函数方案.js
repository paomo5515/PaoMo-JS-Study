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

Student.prototype = new Person()
Student.prototype.studying = function () {
  console.log(this.name + "studying")
}

var stu = new Student("hello", 15, ["jerry"], 116)
console.log(stu.name)
stu.eating()

// 解决 原型链实现继承的弊端：
// 1.打印 stu 对象，继承属性是看不到的
console.log(stu)  // Person { name: 'hello', age: 15, frends: [ 'jerry', 111 ], sno: 111 }

// 2.创建两个 stu 的对象
var stu2 = new Student("word", 16, ["tom"], 177)
var stu3 = new Student("hahh", 17, ["dog"], 118)

// // 直接丢修改象上的属性，是给本对象添加了一个新的属性
// this.name = "tom"
// console.log(stu2.name) // hello
// // 获取引用，修改引用中的值，会相互影响
stu2.friends.push("bob")

console.log(stu2.friends)  // [ 'tom', 'bob' ]
console.log(stu3.friends)  // [ 'dog' ]

// // 3. 在前面是实现类的时候都没有传递参数
// var stu3 = new Student("dog", 122)


// 借用构造函数方案存在的弊端
// 1.Person 函数至少会被调用了两次
// 2. stu 原型对象上 会多出一些属性，但是这些属性是没有存在的必要 
