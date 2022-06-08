// 1.禁止意外创建全局变量
message = "Hello Word"
console.log(messsage);

function foo() {
  age = 20
}

foo()
console.log(age);


// 2.不允许函数有相同的参数名称
function bar(x, y, z, x) {
  console.log(x, y, z, x);
}
bar(10, 20, 30, 40)


// 3.静默错误
true.name = "abc"
NaN = 123
var obj = {}
Object.defineProperty(obj, "name", {
  writable: false, // 只读属性
  value: "hello"
})
obj.name = "jerry" // 严格模式下报错


// 4.不允许使用早期的八进制模式
// ES6 之后的写法
var num = 0o23  // 八进制
var num2 = 0x123; // 十六进制
var num3 = 0b110; // 二进制
console.log(num, num2, num3);


// 5.with 语句允许使用

// 6.eval 函数不会向上引用变量了
var jsString = 'var info = "hello word"; console.log(info);'
eval(jsString)
console.log(info);  // 报错




