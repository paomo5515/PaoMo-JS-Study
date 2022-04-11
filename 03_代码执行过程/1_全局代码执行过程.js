var namef = "hello"

console.log(num1) // undefined
var num1 = 23
var num2 = 20
var num2 = num1 + num2

/*
  以上代码在 V8 引擎是怎样运行的？
  1.代码在运行之前，先解析，v8 引擎内部会帮助我们创建一个 Global Object(全局对象)
[里面包含和String/Date等全局东西]，全局对象里面还有一个 window属性 指向 全局对象(它自己)

  var = globalObject = {
    String: "类"，
    Date: "类"，
    setTimeout: "函数",
    window：globalObject

    // 在解析时，也会解析全局中的代码
    namef：undefined
    num2：undefined
    num2：undefined
  }
  console.log(window.window)

  解析完了   ==> AST ==> ignition ==> bytecode ==> 运行代码
  2.运行代码
为了执行代码，v8 引擎内部会有一个 执行上下文栈[Execution Context Stack](函数调用栈) 一般只放函数
因为我们执行的是全局代码，为了全局代码能够正常的执行，需要创建 全局执行上下文[Global Execution Context]
(全局代码需要被执行时才会创建) 全局执行上下文里面会有 VO,VO(varible Object 变量对象) 指向的是 GO，

 3.开始执行代码，就去 GO 里面找 
    namef："hello"
    num2：23
    num2：20
  
  为什么会说作用提升？
    最主要就是将代码放在了 GO 里面，需要用到的时候，就会去 VO 里面查找的
 */

function foo() {
  var namef = "foo"
}