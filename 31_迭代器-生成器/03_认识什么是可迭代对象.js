/*  
    可迭代对象：
      它和迭代器是不同的概念；
      当一个对象实现了 iterable protocol 协议时，他就是一个可迭代对象；
      这个对象的要求是必须实现 @@iterator 方法，在代码中我们使用 Symbol.iterator 访问该属性。

    迭代器和可迭代对象的区别：
      迭代器是一个对象，这个对象需要符合迭代器协议(iterator protocol)
      const iterator = {next: function() {return}};

      可迭代对象是一个对象，符合可迭代协议(iterable protocol);
      const iterableObj = {[Symbol.iterator]() {return 迭代器}}

*/

const namesIterator = {
  next() {
    if (index < names.length) {
      return { done: false, value: names[index++] }
    } else {
      return { done: true, value: undefined }
    }
  }
}

const iterableObj = {
  names: ["a", "b", "c"],
  [Symbol.iterator]() {
    // console.log(this)  // 是 iterableObj
    let index = 0
    return {
      next: () => {
        if (index < this.names.length) {
          return { done: false, value: this.names[index++] }
        } else {
          return { done: true, value: undefined }
        }
      }
    }
  }
}
// 这个对象就是可迭代对象
console.log(iterableObj[Symbol.iterator])

// 1.第一次调用
const iterator1 = iterableObj[Symbol.iterator]() // 返回一个迭代器
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())

// 2.第二次调用 iteratorObj[Symbol.iterator]()  会返回一个新的 迭代器
const iterator2 = iteratorObj[Symbol.iterator]()
console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())

// 3.for..of 可以遍历的东西必须是一个可迭代对象
const obj = {
  name: "obj",
  age: 18
}

// 普通对象是不可迭代的
/* for (const item of obj) {
  console.log(item)  // obj is not iterable
} */

// iteratorObj 遇到 done: true  就会停止
for (const item of iteratorObj) {
  console.log(item) // a b c
}