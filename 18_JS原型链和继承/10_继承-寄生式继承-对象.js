// 寄生式继承的思路是结合原型 类继承和工厂模式的一种方式。
// 即创建一个封装继承过程的函数，该函数在内部以某种方式来增强对象，最后再将这个对象返回；

var personObj = {
  running: function () {
    console.log("running")
  }
}

// 改进
function createStu(name) {
  var stu = Object.create(personObj)
  stu.name = name
  stu.studying = function(){
    console.log("studying") // 弊端 每次都会创建
  }
  return stu
}


var stuObj = Object.create(personObj)
// 扩展 stuObj 的方法

stuObj.name = "hello"
stuObj.studying = function () {

}

// 如果多的话  会出现很多重复代码
var stuObj2 = Object.create(personObj)
stuObj2.name = "word"
stuObj2.studying = function () {

}

// 只需要传 name
var stu3 = createStu("jerry")
var stu4 = createStu("tom")