/*  
    WeakMap 和 Map 的区别？ 
  1.WeakMap 的 key 只能使用对象，不接受其他的类型作为 key.
  2.WeakMap 的 key 对 对象的引用是弱引用，如果没有其他引用 引用这个对象，
那么 GC 可以回收该对象。
  3.不能遍历
*/
const obj1 = { name: "obj1" }

const map = new Map()
map.set(obj1, "aaa")

const weakMap = new WeakMap()
weakMap.set(obj1, "bbb")

// 不能使用基本数据类型
// weakMap.set(1, "1")

// 常见的方法
// { { name:"obj1" }:"bbb" }
console.log(weakMap.get(obj1)) // bbb

// has 方法
console.log(weakMap.has(obj1)) //true

// delete 方法
// console.log(weakMap.delete(obj1))
console.log(map) // // { { name:"obj1" }:"aaa" }
console.log(weakMap) 

