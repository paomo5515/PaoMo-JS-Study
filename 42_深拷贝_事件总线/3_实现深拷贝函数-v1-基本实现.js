function isObject(value) {
  const valueType = typeof value
  return (value !== null && (valueType === "object" || valueType === "function"))
}

function deepClone(originValue) {
  // 判断传入的 originValue 是否是一个对象类型
  if (!isObject(originValue)) {
    return originValue
  }
  const newObject = {}
  for (const key in originValue) {
    // newObject[key] = originValue[key]
    newObject[key] = deepClone(originValue[key])
  }
  return newObject
}

// 测试代码
const obj = {
  name: "obj",
  age: 18,
  friend: {
    name: "friend",
    address: {
      city: "上海市"
    }
  }
}

const newObj = deepClone(obj)
console.log(newObj === obj);

obj.friend.name = "word"
obj.friend.address.city = "北京市"
console.log(newObj);