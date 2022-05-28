const s1 = Symbol()
const s2 = Symbol()

const obj = {
  name: "obj",
  friend: {
    name: "hello"
  },
  foo() {
    console.log("foo function");
  },
  // 作为 key
  [s1]: "abc",
  // 作为 value
  s2: s2
}

obj.inner = obj // 直接报错
// 缺点就是 不处理 Symbol，不能循环引用
const info = JSON.parse(JSON.stringify(obj))
console.log(info === obj); // false

obj.friend.name = "word"
// { name: 'obj', friend: { name: 'hello' } }
// 更改 obj 不会影响 info
console.log(info);