/*
    迭代器(iterator)，是确使用户在容器对象（container，例如链表或数组）上遍历的对象，
  使用该接口 无需关系对象的内部实现细节。
    从迭代器的定义上我们可以看出来，迭代器是帮助我们对某个数据结构进行遍历的对象。
    
    在 JS 中，迭代器也是一个具体的对象，这个对象需要符合迭代器协议(iterator protocol)

      迭代器协议定义了 产生一系列值（无论是有限还是无限个）的标准方式；
      那么在 JS 中这个表现就是一个 特定的 next() 方法；

    next方法有如下的要求：
      一个无参数或者一个参数的函数，返回一个应当拥有以下两个属性的对象：
        done(boolean)
          如果迭代器可以产生序列中的下一个值，则为 false。（这等价于没有指定那个 done 这个属性。）
          如果迭代器已将序列迭代完毕，则为 true。这种情况下，value 是可选的，如果它依然存在，即为迭代结束之后的默认返回值。
        value
          迭代器返回的任何 JS 值。done 为 true 时可省略。

*/

// 编写的一个迭代器
const iterator = {
  next() {
    return { done: true, value: 123 }
  }
}

// 数组
const names = ["a", "b", "c"]

// 创建一个迭代器 对象来访问数组
let index = 0
const arrIterator = {
  next() {
    if (index < names.length) {
      return { done: false, value: names[index++] }
    } else {
      return { done: true, value: undefined }
    }
  }
}

console.log(arrIterator.next())
console.log(arrIterator.next())
console.log(arrIterator.next())
console.log(arrIterator.next())

