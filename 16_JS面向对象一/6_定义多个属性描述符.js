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
console.log(obj.age);

var obj2 = {
  //私有属性(JS 没有严格属性的私有属性)
  _age: 18,
  set age(value) {
    this._age = value
  },
  get age() {
    return this._age
  }
}

Object.defineProperties(obj2, {
  name: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "pmo"
  }

})
obj2.age = 20
console.log(obj2.age);