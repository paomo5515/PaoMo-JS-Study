/*
  如果不希望在 对象内部 包含这个函数的引用，同时又希望在这个对象上进行调用强制调用，
该怎么做呢？
js 所有的函数都可以用 call 和 applay 方法(这个和 Protoype有关)。
  它们两个的区别;
    其实非常简单，第一个参数是相同的，后面的参数， apply 为数组， call 为参数列表。
    这两个函数的第一个参数都要求是一个对象，这个对象给 this 准备的。
    在调用这个函数时，会将 this 绑定到这个传入的对象上。
*/
function foo() {
  console.log("函数被调用了", this);
}

var obj = {
  name: "hello"
}

// foo 直接调用 和 call/apply 调用的不同在于 this 的绑定不同
// foo 直接调用指向的全局对象(window)，
foo()

// call/apply 是可以指定 this的绑定对象
foo.call(obj)
foo.apply(obj)
foo.apply("abc")


// call 和 applay 的区别？
function sum(num1, num2, num3) {
  console.log(num1 + num2 + num3, this)
}

sum(20, 30, 40)
sum.call("call", 20, 30, 40)
sum.apply("apply", [20, 30, 40])

// call 和 apply 在执行函数时，是可以明确的绑定 this，这个绑定规则称之为显示绑定。