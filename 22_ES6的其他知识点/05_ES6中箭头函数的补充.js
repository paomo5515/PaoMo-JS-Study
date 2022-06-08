function foo() {

}

console.log(foo.prototype)
const f = new foo()
// f.__proto__ = foo.prototype

const bar = () => {

}
console.log(bar.prototype)  // undefined
const b = new bar()  // 报错  bar is not a constructor