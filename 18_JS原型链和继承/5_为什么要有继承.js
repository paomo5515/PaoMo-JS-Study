// Student

function Student(name, age, sno) {
  this.name = name
  this.age = age
  this.sno = sno
}

Student.prototype.studying = function () {
  console.log(this.name + "在学习")
}

Student.prototype.eating = function () {
  console.log(this.name + "在吃东西")
}

Student.prototype.teaching = function () {
  console.log(this.name + "在学习")
}


// Teacher

function Teacher(name, age, title) {
  this.name = name
  this.age = age
  this.title = title
}

Student.prototype.studying = function () {
  console.log(this.name + "在学习")
}

Student.prototype.eating = function () {
  console.log(this.name + "在吃东西")
}

Student.prototype.teaching = function () {
  console.log(this.name + "在上课")
}