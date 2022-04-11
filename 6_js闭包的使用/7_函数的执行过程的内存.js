function foo() {
  var name = "foo"
  var age = 15
}

function test() {
  console.log("test");
}

foo()
test()

/*
    开始执行代码之前 ==> 创建 GO ==> 把全局执行上下文放入到 调用栈中开始执行 ==> 里面有 VO:GO
    ==>  {foo: ,test } ==> 解析到 foo 发现 foo 是一个函数 ==> 创建 foo 的函数对象 0xa00 ==> {foo:0xa00}
    ==> foo函数对象里面包含 父级作用域和 函数的执行体,里面还有 GO:指向父级 ==> 开始解析 text 函数
    ==> {test } ==> 解析到 test 发现 test 是一个 函数 ==> 擦黄健 test 的函数对象 0xb00 ==> {test:0xb00}
    == >test函数对象里面包含 父级作用域和 函数的执行体,里面还有 GO:指向父级 ==> 执行到第 10行 ==> 执行完销毁 AO
    ==> 创建 foo 的函数执行上下文 里面有一个 VO:AO ==> 创建 AO 对象 0x100 指向 foo 的函数对象 0xa00
    ==> 开始执行代码 {var name = "foo"var age = 15} 给 ==> foo的 AO 对象里面的 name和 age 赋值
    ==>执行完 test 就会销毁 test 的 AO
*/