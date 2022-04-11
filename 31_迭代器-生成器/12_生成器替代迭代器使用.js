// 生成器来替代迭代器
function* createArrayIterator(arr) {

  // 3.都三种写法 yeild* 必须跟一个可迭代对象
  yield* arr

  // 2.第二种写法
  // for (const item of arr) {
  //   yield item
  // }

  // 1.第一种写法
  // let index = 0
  // yield arr[index++]  // { done: false, value: "a" }
  // yield arr[index++]  // { done: false, value: "b" }
  // yield arr[index++]  // { done: false, value: "c" }
  // yield arr[index++]  // { done: true, value: undefined }
}

const names = ["a", "b", "c"]
const namseIterator = createArrayIterator(names)

console.log(namseIterator.next())
console.log(namseIterator.next())
console.log(namseIterator.next())
console.log(namseIterator.next())
console.log("-------------------------")


// 案例二: 创建一个函数,这个函数可以迭代一个范围内的数字
// 10 ~ 20
function* createRangeIterator(start, end) {
  let index = start
  while (index < end) {
    yield index++
  }

  /* let index = start
  return {
    next() {
      if (index < end) {
        return { done: false, value: index++ }
      } else {
        return { done: true, value: undefined }
      }
    }
  } */
}

const rangeIterator = createRangeIterator(10, 20)
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())


// 3.class 案例
class ClassRoom {
  constructor(address, name, students) {
    this.address = address
    this.name = name
    this.students = students
  }
  entry(newStudent) {
    this.students.push(newStudent)
  };

  /* [Symbol.iterator] = function* () {
    yield* this.students
  } */

  *[Symbol.iterator]() {
    yield* this.students
  }
}

const classRoom = new ClassRoom("3幢5楼205", "计算机教室", ['tom', "jerry", "dog"])
for (const item of classRoom) {
  console.log(item)  // tom jerry dog
}