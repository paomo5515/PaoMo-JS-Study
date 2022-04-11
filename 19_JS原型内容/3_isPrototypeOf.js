// 用于检测某个对象，是否出现在 某个实例对象的原型链上。
function Person() {

}
var p = new Person()

console.log(p instanceof Person) // true
// 只能判断 对象
console.log(Person.prototype.isPrototypeOf(p)) // true

var obj = {
  name: "hello",
  age: 18
}
var info = Object.create(obj)

console.log(info instanceof obj)  // 报错
console.log(obj.isPrototypeOf(info))  // true