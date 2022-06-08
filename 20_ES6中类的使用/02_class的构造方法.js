// 类的声明
class Person {
  // 类的构造方法  一个类只能有一个 构造函数
  // 1.在内存中创建一个对象 moni = {}
  // 2.将类的 prototype 赋值给 创建出来的 对象的 __proto__  
  // 3.将对象赋值给函数的 this: new 绑定 this = moni
  // 4.执行函数体的代码
  // 自动返回创建出来的对象
  constructor(name, age) {
    this.name = name
    this.age = age
  } 
}

var p1 = new Person("hello", 12)
var p2 = new Person("word", 12)
console.log(p1, p2) // Person { name: 'hello', age: 12 } Person { name: 'word', age: 12 }