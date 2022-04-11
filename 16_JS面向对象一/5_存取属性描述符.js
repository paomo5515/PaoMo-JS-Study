var obj = {
  name: 'pmo',
  age: 18,
  _address: "北京市"  // 隐藏属性
}


// 存取属性描述符
// 1.隐藏某一个私有属性，不希望被外界使用和赋值
// 2.如果希望截获某一个属性 它的访问和设置值的过程时，也会使用存储属性描述符
Object.defineProperty(obj, "address", {
  enumerable: true,
  configurable: true,
  // writable:true,
  // value: "上海市",  // 不能和 set get 共存
  get: function () {
    // 捕获
    foo()
    return this._address
  },
  set: function (value) {
    this._address = value
  }
})
console.log(obj.address);

obj.address = "上海市"
console.log(obj.address);

// 获取时捕获 
function foo(){
  console.log("获取了一次 address 的值");
}