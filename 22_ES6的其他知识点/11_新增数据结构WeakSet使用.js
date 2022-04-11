/*
    和 Set 类似的另外一个数据结构称之为 WeakSet，也是内部元素不能重复的数据结构。
    那么和 Set 有什么区别呢？
  1.WeakSet 中只能存放 对象类型，不能存放基本 数据类型。
  2.WeakSet 对元素的引用是 弱引用，如果没有其他引用对某个对象进行引用，那么
GC 可以对该对象进行回收。

  WeakSet 不能遍历：
    进行 forEach/forof 
    因为 WeakSet 只是对对象的 弱引用，如果我们遍历获取到其中的元素，那么有可能造成
  对象不能正常的销毁，所以存储到 weakSet 中的对象是没办法获取的。
*/

const weakSet = new WeakSet()

// 区别一：只能存放对象类型 // Invalid value used in weak set
// weakSet.add(10)

// 区别二：对对象是一个弱引用
let obj = { name: "hello" }

// 建立的是强引用
weakSet.add(obj)

const set = new Set()
// 建立强引用
set.add(obj)

// WeakSet 的应用场景
const personSet = new WeakSet()
class Person {
  constructor() {
    personSet.add(this)
  }
  eating() {
    if(!personSet.has(this)){
      throw new Error("不能通过非构造方法创建出来的对象调用running方法")
    }
    console.log("running", this)
  }
}
const p = new Person()
p.eating()

p.eating.call({ name: "hello" })

// 需求不能使用 p.eating.call 方法调用  
