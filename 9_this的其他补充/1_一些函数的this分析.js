// 1.setTimeout
function pmoSetTimeout(fn, duration) {
  fn()
  // fn.call("abc")
}
pmoSetTimeout(function () {
  console.log(this); // window
}, 3000)

setTimeout(function () {
  console.log(this); // window
}, 2000);


// 2.监听点击
const boxDiv = document.querySelector(".box")
boxDiv.onclick = function () {
  console.log(this);  // <div class="box"></div> 也就是 boxDiv 对象
  // boxDiv.onclick() 相当于这样调用
}

boxDiv.addEventListener("click", function () {
  console.log(this);
})
boxDiv.addEventListener("click", function () {
  console.log(this);
})
boxDiv.addEventListener("click", function () {
  console.log(this);
})


// 3.数组 forEach/map/filter/find
var names = ["a", "b", "c"]
names.forEach(function (item) {
  console.log(item, this);  // 默认情况下 是 window
})

// 第二个参数可以传递 this 
names.forEach(function (item) {
  console.log(item, this); // {"abc"} 
}, "abc")
 
names.map(function (item) {
  console.log(item, this); // {"cba"}
}, "cba")