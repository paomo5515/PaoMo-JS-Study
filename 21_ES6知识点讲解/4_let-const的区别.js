var foo = "foo"

let bar = "bar"

// const: constant(常量/衡量)
const name = "abc"

// const 本质上传递的值不可以修改
// 但是如果传递的是一个引用类型（内存地址），可以通过引用找到对应的对象，去修改
// 对象内部的属性，这个是可以的。
const obj = {
  foo: "foo"
}
obj.name = "obj" // 不会报错
console.log(obj.name)

// obj = {}  // 会报错

// 注意事项二：通过 let/const 定义的变量名是不可以重复定义的
// let aa = "aa"
// let aa = "bb"