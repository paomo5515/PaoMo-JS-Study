var namef = "hello"

foo(123)
function foo(num) {
  console.log(a); // undefined
  var a = 10
  console.log("foo");
}

/*
    以上代码执行的过程 
      创建 GO(全局对象)
      var GO = {
        String:"类",
        window: GO，
        namef: undefined
        foo: 0xa00 (指向函数对象)
      }

      在编译的时候不会去执行代码
      在编译的时候 发现是一个函数的 时候 就会在内存中开辟一块空间(并有内存地址 0xa00) 创建一个foo函数对象 
    里面包含 父级作用域(也就是全局的作用域) 还包含函数执行体(也就是foo函数里面的代码块)

    编译完了，开始执行代码
        namef: "hello"
        foo: 0xa00 (指向函数对象)
        执行到 foo 就会去 GO 里面查找 foo 发现是一个内存地址  就回去  找到这块空间 ==> foo() 小括号表示执行
        ==> 把 foo 函数放入到 调用栈中，并不是直接放入，而是在 调用栈里面再创建一个函数执行上下文，并且也会在
        函数调用栈里面创建一个 VO，VO 指向的是 AO，也就是会在内存中再创建一个 AO (Activation Object)也称活跃对象,
        里面保存着 foo 函数的代码块 num: undefined/a:undefined
        在真正开始执行 foo 函数之前，就创建 AO 对象
        开始执行 foo 函数 执行 num:123 在执行到 clg(a) 的时候就回去 AO 里面找  发现是 undefined
        foo 函数执行完了，就会 出 执行上下文栈，foo函数执行上下文栈就会销毁，AO 如果没有对象指向它 也就会被销毁
    
        函数在编译的时候就已经确定了


      JS 在查找变量的时候，会沿着作用域链查找的，作用域在编译的时候就已经确定了，跟函数的执行位置无关，跟函数的定义在哪儿有关
 */