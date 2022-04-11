// 应用场景（vue3的响应式原理）
// 当 ob1 的 name 属性发生改变时，就执行对应函数
const ob1 = {
  name: "ooo",
  age: 10
}
function ob1NameFn1() {
  console.log("ob1NameFn1被执行")
}
function ob1NameFn2() {
  console.log("ob1NameFn2被执行")
}

const ob2 = {
  height: 1.78,
  address: "上海市"
}
function ob2HeightFn1() {
  console.log("ob2NameFn2被执行")
}
function ob2HeightFn2() {
  console.log("ob2NameFn2被执行")
}

// 对 ob1 收集的数据结构
// 1.创建 WeakMpa
const weakMapOb1 = new WeakMap()
// 2.对 ob2 收集的数据结构
const mapOb1 = new Map()
mapOb1.set("name", [ob1NameFn1, ob1NameFn2])
weakMapOb1.set(ob1, mapOb1)

// 对 ob2 收集的数据结构
const weakMapOb2 = new WeakMap()
const mapOb2 = new Map()
mapOb2.set("height", [ob2HeightFn1, ob2HeightFn2])
weakMapOb2.set(ob2, mapOb2)

// 3.如果 ob1.name 发生了改变
// Proxy/Object.defineProperty
ob1.name = "jerry"
const targetMap = weakMapOb1.get(ob1)
const fns = targetMap.get("name")
fns.forEach(item => item())