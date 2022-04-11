class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  running() {
    console.log(this.name + "running")
  }
  personMethod(){
    console.log("处理逻辑1")
    console.log("处理逻辑2")
  }

  static PersonStaticMethod(){
    console.log("PersonStaticMethod")
  }
}

// Student 称之为子类(派生类)
class Student extends Person {
  // JS 引擎在解析 子类的时候就有要求，如果我们有实现继承
  // 那么子类的构造方法中，在使用 this 之前
  constructor(name, age, sno) {
    super(name, age)
    this.sno = sno
  }
  studying() {
    console.log(this.name + "studying")
  }

  // 可以重写 父类方法
  personMethod(){
    // 复用父类中的 处理逻辑
    super.personMethod()
    console.log("处理逻辑3")
    console.log("处理逻辑4")
    console.log("处理逻辑5")
  }

  
}

// 子类的显示原型对象的隐式原型 指向 父类的 显示原型
console.log(Student.prototype.__proto__ === Person.prototype)  // true
console.log(Student.__proto__)  // [class Person]
// 子类对象的隐式原型 指向 父类
console.log(Student.__proto__ === Person)  // true
var stu = new Student("hello", 18, 111)
stu.running()
console.log(stu)
stu.personMethod()
// 也可以继承 父类中的静态方法
Student.PersonStaticMethod()  // PersonStaticMethod


// 实例的对象的隐式原型 指向 构造函数的 显示原型
console.log(stu.__proto__ === Student.prototype)