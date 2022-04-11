
/*
  函数和方法的区别
  函数 function ：独立的 function，那么称之为是一个函数
  function foo(){

  }

  方法 method：当我们的一个函数属于某一个对象时，我们称这个函数是这个对象的方法
  var obj = {
    foo: function() {}
  }
  obj.foo()
 */
var nums = [10, 5, 11, 100, 55]

var newNums = []
for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  if (num % 2 === 0) {
    newNums.push(num)
  }
}
console.log(newNums);

// filter：过滤
// [10, 5, 11, 100, 55] 回调5次
// 第三个参数 arr 是 数组的引用，filter 返回值是一个新的数组
var newNums = nums.filter((item, index, arr) => {
  return item % 2 === 0 // 偶数
})
console.log(newNums);


// map：映射
// [10, 5, 11, 100, 55] 回调5次
var newNums2 = nums.map((item) => {
  return item * 10
})
console.log(newNums2);


// forEach：枚举/穷举/迭代 
//  没有返回值
var newNums3 = nums.forEach((item) => {
  console.log(item);
  return [item]
})
console.log(newNums3); // undefined


// find/findIndex
// 返回 ture 就直接结束，如果没有找到 返回 undefined
var item = nums.find((item) => {
  return item === 12
})
console.log(item);

var friends = [
  { name: "tom", age: 4 },
  { name: "jerry", age: 3 },
  { name: "dog", age: 2 }
]

const findFriend = friends.find((item) => {
  return item.name == "jerry"
})
console.log(findFriend); // { name: 'jerry', age: 3 }

const friendIndex = friends.find((item) => {
  return item.name == "jerry"
})
console.log(friendIndex); // 1

// reduce：累加 
// [10, 5, 11, 100, 55]
var total = 0
for (let i = 0; i < nums.length; i++) {
  total += nums[i];

}
console.log(total); // 181

var add = nums.reduce((preValue, currentValue) => {
  return preValue + currentValue
}, 0)
console.log(add); //181