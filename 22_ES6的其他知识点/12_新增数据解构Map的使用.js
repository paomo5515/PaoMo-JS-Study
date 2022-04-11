// JS 中对象是 不能使用 对象来作为 key 的
const obj1 = { name: "hello" }
const obj2 = { name: "word" }

// 让 obj1,obj2 作为 key
const info = {
  [obj1]: "aa",
  [obj2]: "bb"
}

// 为什么只出现一个 key 呢？
// 因为 作为 key 的时候  先把 obj1 转为 字符串了，obj1 和 obj2 转为字符串作为
// key 时 都是  '[object Object]'，所以会出现覆盖
console.log(info)  // { '[object Object]': 'bb' }

// Map 就是 可以让 我们让对象作为 key 的
const map = new Map()
map.set(obj1, "aaa")
map.set(obj2, "bbb")
map.set(1, "ccc")
/* 
  Map(3) {
    { name: 'hello' } => 'aaa',
    { name: 'word' } => 'bbb',
    1 => 'ccc'
  } 
*/
console.log(map)

// 传入数组，要求：数组格式
/*
  Map(3) {
    { name: 'hello' } => 'obj1',
    { name: 'word' } => 'obj2',
    2 => 'ddd'
  }
*/
const map2 = new Map([[obj1, "obj1"], [obj2, "obj2"], [2, "ddd"]])
console.log(map2)

// 常见方法
console.log(map2.size) // 3

// set 设置键值对
/* Map(4) {
  { name: 'hello' } => 'obj1',
  { name: 'word' } => 'obj2',
  2 => 'ddd',
  'hahh' => 'mnmn'
} */
map2.set("hahh", "mnmn")
console.log(map2)

// get(key)
console.log(map2.get("hahh"))  // mnmn

// has(key)
console.log(map2.has("hahh"))

// delete(key) 删除成功返回 true
map2.delete(obj1)
console.log(map2)

// clear
// map2.clear()
// console.log(map2)

// 遍历 Map
/* 
  obj2 { name: 'word' }
  ddd 2
  mnmn hahh
*/
map2.forEach((item, key) => {
  console.log(item, key)
})


/*
  [ { name: 'word' }, 'obj2' ]
  [ 2, 'ddd' ]
  [ 'hahh', 'mnmn' ]  
*/
for (const item of map2) {
  console.log(item)
}

// 结构 + 遍历
/*
  { name: 'word' } obj2
  2 ddd
  hahh mnmn
*/
for (const [key, value] of map2) {
  console.log(key, value)
}
