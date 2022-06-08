/*
  官方定义：  
    V8 是用 C++ 编写的 Google 开源高性能 JavaScript 和 WebAssembly 引擎，它用于 Chrome和Node.js等；
    它实现 ECMAScript 和 WebAssembly，并在 Windows 7或更高版本，macOS 10.12+ 和使用 x64，IA-32。
      ARM 或 MIPS 处理器的 Linux 系统上运行。
    V8 可以独立运行，也可以嵌入到任何 C++ 应用程序中。

    V8 原理流程
    JS 源代码 ==> Parse(解析 js 代码，词法分析 语法分析) ==> AST(抽象语法树，ast 网站) ==> 
  ignition(解释器/转换器) ==> bytecode 字节码(跨平台) ==> V8引擎就会将字节码转换为不同的 CPU 指令的
  ignition(解释器/转换器) ==> TuboFan(收集信息，比如类型信息，某个函数执行的频率) ==> 优化的机器码 ==> CUP直接执行

    解释器 为什么不直接转换为 机器码？
    当前 JS 代码跑在什么样的环境下面，是不确定的(MAC、Windews 等 chrome浏览器上面)，在
  不同的环境就会有不同的 CPU，不同的 CPU 就会有不同的架构，它们所执行的机器指令是不一样的，
  所以 解释器是不确定转成  哪个机器指令，所以才会转换成字节码，

  官方 V8 引擎的解析图
  解析 html ==> 遇到 js 会把 js 下载下来 ==> Blink(内核) ==> 给 V8 引擎 ==> Stream（获取源码并进行编码转换） ==> Scanner(扫描器：词法分析，语法分析) ==>
tokens ==> parse ==> AST ==> ignition ==> bytecode
  PreParse 称之为预解析，为什么需要预解析？
这是因为并不是所有的 js 代码，在一开始时就会被执行。那么对所有的 js 代码进行解析，必然会影响网页的运行效率。
所以 V8 引擎就实现了 Lazy Parsing(延迟解析)的方案，它的作用是将不必要的函数进行预解析，也就是只解析暂时需要的
内容，而对函数的全量解析 是 在函数被调用时才会进行；
比如我们在一个函数 outer 内部定义了 另外一个函数 inner ,那么 inner 函数就会进行预解析。
 */