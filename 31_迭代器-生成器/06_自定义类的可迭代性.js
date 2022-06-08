// 案例：创建一个教室类，创建出来的对象都是 可迭代对象
class ClassRoom {
  constructor(address, name, students) {
    this.address = address
    this.name = name
    this.students = students
  }
  entry(newStudent) {
    this.students.push(newStudent)
  };
  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => {
        if (index < this.students.length) {
          return { done: false, value: this.students[index++] }
        } else {
          return { done: true, value: undefined }
        }
      },
      return: () => {
        console.log("迭代器提前终止了~~~")
        return { done: true, value: undefined }
      }
    }
  }
}

const classRoom = new ClassRoom("3幢5楼205", "计算机教室", ['tom', "jerry", "dog"])
classRoom.entry("lili")

for (const item of classRoom) {
  console.log(item) // 'tom', "jerry", "dog", "lili"
  if (item === "dog") break
}
// 0.52.00