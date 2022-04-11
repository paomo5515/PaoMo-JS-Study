// 封装继承原型函数,第一个参数 子类，第二个参数 父类
function createObject(o) {
  function Fn() { }
  Fn.prototype = o
  var newObj = new Fn()
  // newObj.__proto__ = o 其实就是
  return newObj
}

function inheritPropotype(SubType, SuperType) {
  SubType.prototype = createObject(SuperType.prototype)
  Object.defineProperty(SubType.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: SubType
  })
}

function Person(name, age, friends) {
  this.name = name
  this.age = age
  this.friends = friends
}
Person.prototype.running = function () {
  console.log("running")
}
Person.prototype.eating = function () {
  console.log("eating")
}

function Student(name, age, friedns, sno, score) {
  Person.call(this, name, age, friedns)
  this.sno = sno
  this.score = score
}

inheritPropotype(Student, Person)

Student.prototype.studying = function () {
  console.log("studying")
}

var stu = new Student("hello", 18, ["tom"], 1111, 100)
// Person 这个标识就是  constructor
console.log(stu)  // Person {name: 'hello',age: 18,friends: [ 'tom' ],sno: 1111,score: 100}
stu.studying()
stu.running()
stu.eating()

console.log(stu.constructor.name)  // Student