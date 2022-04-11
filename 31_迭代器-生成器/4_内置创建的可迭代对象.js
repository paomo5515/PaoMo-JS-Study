/*
    我们平时创建的很多原生对象已经实现了可迭代协议，会产生一个迭代器对象的：
      String、Array、Map、Set、arguments对象、Nodelist集合；
*/

const names = ["a", "b", "c"]

console.log(names[Symbol.iterator]) // [Function: values]

const iterator1 = names[Symbol.iterator]()
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())

// 因为有迭代器，所以才能使用 for..of
for (const item of names) {
  console.log(item)
}

// Map/Set
const set = new Set()
set.add(10)
set.add(20)
set.add(30)

for (const item of set) {
  console.log(item)
}

// 函数中的 arguments 也是一个可迭代对象
function foo(x, y, z) {
  for (const item of arguments) {
    console.log(item) // 10,20,30,40
  }

}
foo(10, 20, 30, 40) 
console.log(foo.length)  // 3