var color = "blue"

function foo() {
  console.log(color); // blue
}

function bar() {
  var color = "red"
  foo()
}
bar()

/*
  函数执行需要调用栈
  在编译阶段创建 GO 对象 = {window, string, color:undefined foo:0x100 bar:0x110}
  发现 foo 和 bar 是一个函数  就会在 内存中创建 创建相对应的 函数对象的存储空间，
  里面 存在着 父级作用域(在编译时就已经确定了，跟执行位置没有关系)和 函数的执行体
  现在开始执行代码 ==> 先执行全局代码(在调用栈里面创建 全局执行上下文栈 VO:GO)
  执行到第一行 将 color 赋值为 blue ==> 执行 bar 函数 ==> 创建bar函数执行上下文
  里面也要创建 VO 指向的是 AO(创建AO对象里面有函数体 color:undefined) ==> 开始执行
  bar 函数体里面的内容 ==> color:red ==> 执行 foo 函数 ==> 创建 foo 的函数执行上下文
  ==> 将 foo 放到 函数调用栈 ==> 创建 foo的 AO 对象(里面包含 foo 的函数体 clg(color))
   ==> 开始查找 color ==> 去父级作用域查找 

  早期 ECMA 的版本规范
  每一个执行上下文会被关联到一个变量环境(variable object，VO)，在源代码中的变量和函数声明会被
  作为属性添加 到 VO 中。 对于函数来说，参数也会被添加到 VO 中。
  在最新版 ECMA 的版本规范中，对于一些词汇进行了修改：
  每一个执行上下文会关联到一个变量环境 (Variable Environment) 中，在执行代码中变量和函数的声明
  会作为环境记录(Environment Record) 添加到变量环境中。对于函数来说，参数也会被作为环境记录添加到变量环境中。
 */