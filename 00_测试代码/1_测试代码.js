function foo(el) {
  console.log(el, this.id);
}
var obj = {
  id: "hello"
};

[1, 2, 3].forEach(foo, obj)