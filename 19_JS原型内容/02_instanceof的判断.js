
function inheritPropotype(SubType, SuperType) {
  SubType.prototype = Object.create(SuperType.prototype)
  Object.defineProperty(SubType.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: SubType
  })
}

function Person() {

}

function Student() {

}

inheritPropotype(Student, Person)

var stu = new Student()

// instanceof 用于检测 构造函数的 prototype，是否出现在某个实例对象的原型链上
console.log(stu instanceof Student) // true
console.log(stu instanceof Person) // true
console.log(stu instanceof Object) // true

console.log(Person.prototype.__proto__)  // [Object: null prototype] {} 指向顶层原型
