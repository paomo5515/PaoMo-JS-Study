var obj = {
  //私有属性(JS 没有严格属性的私有属性)
  _age: 18
}

Object.defineProperties(obj, {
  name: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "pmo"
  },
  age: {
    configurable: false,
    enumerable: false,
    get: function () {
      return this._age
    },
    set: function (value) {
      return this._age = value
    }
  }
})
// console.log(obj.age);

// 获取某一个特定属性的属性描述符
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
console.log(Object.getOwnPropertyDescriptor(obj, "age"));


// 获取对象的所有的属性描述符
console.log(Object.getOwnPropertyDescriptors(obj))
