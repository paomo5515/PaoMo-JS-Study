function isObject(value) {
  const valueType = typeof value
  return (value !== null && (valueType === "object" || valueType === "function"))
}

function deepClone(originValue) {
  // 判断是否是一个 Set 类型
  if (originValue instanceof Set) {
    return new Set([...originValue])
  }

  // 判断是否是一个 Map 类型
  if (originValue instanceof Map) {
    return new Map([...originValue])
  }

  // 判断如果是 Symbol的 value，那么创建一个新的 Symbol
  if (typeof originValue === "symbol") {
    return Symbol(originValue.description)
  }
  // 判断如果是函数类型，那么直接使用同一个函数
  if (typeof originValue === "function") {
    return originValue
  }

  // 判断传入的 originValue 是否是一个对象类型
  if (!isObject(originValue)) {
    return originValue
  }
  // 判断传入的是数组还是对象
  const newObject = Array.isArray(originValue) ? [] : {}
  for (const key in originValue) {
    // newObject[key] = originValue[key]
    newObject[key] = deepClone(originValue[key])
  }

  // 对 Symbol的 key 进行特殊的处理
  const symbolKeys = Object.getOwnPropertySymbols(originValue)
  for (const skey of symbolKeys) {
    newObject[skey] = deepClone(originValue[skey])
  }
  return newObject
}

// 测试代码
let s1 = Symbol("aaa")
let s2 = Symbol("bbb")

const obj = {
  name: "obj",
  age: 18,
  friend: {
    name: "friend",
    address: {
      city: "上海市"
    }
  },
  // 处理数组
  hobbies: ["A", "B", "C"],
  // 处理函数
  foo() {
    console.log("foo function");
  },
  [s1]: "abc",
  s2: s2,
  // Set/Map
  set: new Set(["aa", "bb", "cc"]),
  map: new Map([["x", "z"], ["j", "k"]])
}

const newObj = deepClone(obj)
console.log(newObj === obj);

obj.friend.name = "word"
obj.friend.address.city = "北京市"
console.log(newObj);
console.log(obj.s2 === newObj.s2);
