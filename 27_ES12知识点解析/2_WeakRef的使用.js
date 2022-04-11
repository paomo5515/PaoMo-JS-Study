/*
    FinalizationRegistry 对象可以让你在对象被垃圾回收时请求一个回调。
    FinalizationRegistry提供了这样的一种方法：当一个在注册表中 注册的对象被回收
  时，请求在某个时间点上调用一个清理回调。（清理回调有时被称为 finalizer）
    你可以通过调用 register方法，注册任何你想要清理回调的对象，传入该对象和 所含的值。
*/

// FinalizationRegistry
const finalRegistry = new FinalizationRegistry((value) => {
  console.log("obj对象被销毁了", value)
})

let obj = { name: "obj" }
// let info = obj  强引用

// WeakSet 是弱引用
// let info = new WeakSet()
// info.add(obj)

// ES12 弱引用
let info = new WeakRef(obj)

// 注册的时候，第二个参数可以 绑定一个 值
finalRegistry.register(obj, "obj")

console.log(info.deref().name) // obj

obj = null

setTimeout(() => {
  console.log(info.deref().name) // 销毁了打印 undefined
}, 10000)