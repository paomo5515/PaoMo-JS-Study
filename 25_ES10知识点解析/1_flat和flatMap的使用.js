const nums = [10, 20, [30, 40, [18, 45]], 78, [55, 85]]

// flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的
// 元素合并为一个新数组返回。 默认深度为 1

const newNums1 = nums.flat()
console.log(newNums1)  // [ 10, 20, 30, 40, [ 18, 45 ], 78, 55, 85 ]

const newNums2 = nums.flat(2)
console.log(newNums2)  // [ 10, 20, 30, 40, 18, 45, 78, 55, 85 ]


// flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。
// 注意一：flfatMap 是先进行 map 操作，再做 flat 操作；
// 注意二：flatMap 中的 flat 相当于深度为 1.

// 2.flatMap 的使用
// 第二个参数：绑定 this
const nums2 = [10, 20, 30]
const newNums3 = nums2.flatMap(item => {
  return item * 2
})
console.log(newNums3)  // [ 20, 40, 60 ]

// flatMap 的应用场景
const msgs = ["hello word", "my name is hahh", "hello jerry"]
const words = msgs.flatMap(item => {
  return item.split(" ")
})
console.log(words) // ["hello", "word", "my", "name" ,"is" "hahh", "hello", "jerry"]

