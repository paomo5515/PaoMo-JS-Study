function calcArea(foo) {
  console.log(foo.getArea())
}

var obj = {
  name: "hello",
  getArea: function () {
    return 100
  }
}

class Person {
  getArea() {
    return 200
  }
}
var p = new Person()

calcArea(obj)
calcArea(p)

// 也是多态的体现
function sum(m, n) {
  return m + n
}

sum(21, 23)
sum("aaa", "bbb")