function Student(name, age) {
  this.name = name
  this.age = age
}

function Teacher() {

}

const stu = new Student("hello", 15)
console.log(stu) // Student { name: 'hello', age: 15 }

// 执行 Student 函数中的内容，但是创建出来的对象是 Teacher 对象
const teacher = Reflect.construct(Student, ["jerry", 17], Teacher)
console.log(teacher)  // Teacher { name: 'jerry', age: 17 }

console.log(teacher.__proto__ === Teacher.prototype) // true