/*
    在 ES6 之前，我们存储数据的结构主要有两种：数组、对象。
  在ES6 中新增了另外两种数据结构：Set、Map，以及它们的另外形式 WeakSet、WeakMap.
  Set 是一个新增的数据结构，可以用来保存数据，类似于数组，但是和数组的区别是元素不能重复。
    创建 Set 我么需要通过 Set 构造函数（暂时没有字面量创建的方式）
*/

// 10，20，33，32
// 1，创建 Set 结构
const set = new Set()
set.add(10)
set.add(20)
set.add(33)
set.add(32)

// 2.添加对象时特比注意
// 不同的对象
set.add(10)  // 不能重复
set.add({})
set.add({}) // 有两个对象

// 相同的对象
const obj = {}
set.add(obj)
set.add(obj)  // 有一个

console.log(set)

// 3.对数组去重（取出重复的元素）
// indexOf 返回值：首个被找到的元素在数组中的索引位置; 若没有找到则返回 -1
const arr = [13, 10, 26, 13, 26, 11]
const newArr = []
for (const item of arr) {
  if (newArr.indexOf(item) === -1) {
    newArr.push(item)
  }
}
console.log(newArr)  // [ 13, 10, 26, 11 ]

const arrSet = new Set(arr)
console.log(arrSet) // Set(4) { 13, 10, 26, 11 }
// const newArr2 = Array.from(arrSet)
const newArr2 = [...arrSet]
console.log(newArr2)

// 4.size 属性
console.log(arrSet.size) // 4

// delete 传入元素
arrSet.delete(13)
console.log(arrSet)

// has 
console.log(arrSet.has(100))  // false

// 清空数组
// arrSet.clear()
// console.log(arrSet)

// 5.对 Set 进行遍历
arrSet.forEach(item => {
  console.log(item)
})

for (const item of arrSet) {
  console.log(item)
}