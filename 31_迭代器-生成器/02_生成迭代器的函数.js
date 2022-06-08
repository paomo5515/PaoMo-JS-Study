
function createArrIterator(arr) {
  let index = 0
  return {
    next() {
      if (index < arr.length) {
        return { done: false, value: arr[index++] }
      } else {
        return { done: true, value: undefined }
      }
    }
  }
}

const names = ["a", "b", "c"]
const nums = [10, 20, 30]

const namesIterator = createArrIterator(names)
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())

const numsIterator = createArrIterator(nums)
console.log(numsIterator.next())
console.log(numsIterator.next())
console.log(numsIterator.next())
console.log(numsIterator.next())


// 创建一个无限的迭代器
function createNumberIterator() {
  let index = 0
  return {
    next() {
      return { done: false, value: index++ }
    }
  }
}