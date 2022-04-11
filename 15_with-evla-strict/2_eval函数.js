
// eval 是一个特殊的函数，它可以将传入的字符串当做 JS 代码来运行。

var message = "Hello Worad"
var jsString = 'var message = "Hello Worad";console.log(message);'

eval(jsString)


/*
    不建议在开发中使用 eval：
  eval 代码的可读性非常差（代码的可读性是高质量代码的重要原则）；
  eval 是一个字符串，那么有可能在执行的过程中被可以篡改，那么可能会造成被攻击的风险；
  eval 的执行必须经过 JS 解释器，不能被 JS 引擎优化；
*/