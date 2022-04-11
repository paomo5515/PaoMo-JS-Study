/*
    Symbol 是 ES6 中新增的一个基本数据类型，翻译为符号
    为什么需要 Symbol?
  在 ES6 之前，对象的属性名都是字符串形式，那么容易造成属性名的冲突
  比如原来有一个对象，我们希望在其中添加一个新的属性和值，但是我们在不确定它原来
内部有什么内容的情况下，很容易造成冲突，从而覆盖掉它内部的某个属性；
*/
// 1. ES6 之前对象的属性名(key)
var obj1 = {
  name: "hello",
  friend: { name: "word" },
  age: 18
}

obj1["name"] = "jerry"
// 覆盖原来的 name 属性
console.log(obj1) // { name: 'jerry', friend: { name: 'word' }, age: 18 }  

// 2. ES6 中 Symbol的使用，对象的属性名可以使用字符串，也可以使用 Symbol
const s1 = Symbol()
const s2 = Symbol()
console.log(s1 === s2)

// ES2019 (ES10)中，Symbol还有一个描述(description)
const s3 = Symbol("aaa")
console.log(s3.description)  // aaa

// 3.Symbol值作为 key
// 写法一 在定义对象字面量使用
const obj = {
  [s1]: "abc",
  [s2]: "cccd"
}

// 写法二 新增属性
obj[s3] = "NBA"

// Object.defineProperty 方式
const s4 = Symbol()
Object.defineProperty(obj, s4, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ahhah"
})

console.log(obj[s1], obj[s2], obj[s3], obj[s4])
// 注意不能通过 . 语法来获取
console.log(obj.s1) // undefined

// 4.使用 Symbol 作为 key 的属性名，在遍历/Object.keys 等
// 方法中是获取不到这些 Symbole 值
console.log(Object.keys(obj))
console.log(Object.getOwnPropertyNames(obj))
console.log(Object.getOwnPropertySymbols(obj)) // [ Symbol(), Symbol(), Symbol(aaa), Symbol() ]

// 对 Symbol 属性进行遍历
const sKeys = Object.getOwnPropertySymbols(obj)
for (const sKey of sKeys) {
  console.log(obj[sKey])
}

// 5.
const sa = Symbol.for("ccc")
const sb = Symbol.for("ccc")
console.log(sa === sb)  // true

const key = Symbol.keyFor(sa)
console.log(key)  // ccc
const sc = Symbol.for(key)
console.log((sa === sc)) // true