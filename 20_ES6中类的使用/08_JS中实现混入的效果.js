class Person {

}

function mixinRunner(BaseClass) {
  class NewClass extends BaseClass {
    running() {
      console.log("runnning")
    }
  }
  return NewClass
}
// JS 只支持单继承，只能有一个父类
class Student extends Person {

}

var NewStudent = mixinRunner(Student)
var ns = new NewStudent()
ns.running()