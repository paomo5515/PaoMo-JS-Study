/*
    JS 中的语法 for...of、展开语法（spread syntax）、yield*、解构赋值（Destructuring_assignment）;
    创建一些对象是：new Map([Iterable])、new WeakMap([iterable])、new Set([iterable])、new WeakSet([iterable])；
    一些方法的调用：Promise.all(iterable)、Promise.race(iterable)、Array.from(iterable)；
*/

// 1.for..of 场景

// 2.展开语法(spread syntax)
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

const names = ["aa", "bb", "cc"]
const newNames = [...names, ...iterableObj]
console.log(newNames)  // [ 'aa', 'bb', 'cc', 'a', 'b', 'c' ]

const obj = { name: "obj", age: -15 }
// 不能 for..of 遍历，但是可以使用展开运算符，
// 因为它是 ES6新增了一个特性，用的不是迭代器
const newObj = { ...obj }
console.log(newObj)  // { name: 'obj', age: -15 }

// 3.结构语法
const [name1, name2] = names
// 也是新增，没有使用迭代器
const { name, age } = obj

// 4.创建一些其他对象是
const set1 = new Set(iterableObj)
const set2 = new Set(names)

const arr1 = Array.from(iterableObj)

// 5.Promise.all
Promise.all(iterableObj).then(res => {
  console.log(res)
})