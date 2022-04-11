class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this._adderss = "上海市"
  }

  // 原型的方法，供 实例使用
  eating() {
    console.log("eating")
  }
  running() {
    console.log("running")
  }

  // 类的访问器方法
  get adderss() {
    console.log("拦截访问器")
    return this._adderss
  }
  set adderss(newAddresss) {
    console.log("拦截设置操作")
    this._adderss = newAddresss
  }

  // 类的静态方法（类方法），只能 Person 类自己使用
  static createPerson(){

  }
}

var p = new Person("hello", 15)
p.eating()
p.running()
console.log(p.adderss)
p.adderss = "北京市"
console.log(p.adderss)

// console.log(Object.getOwnPropertyDescriptors(Person.prototype))

