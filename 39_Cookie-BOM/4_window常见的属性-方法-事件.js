// 1.常见的属性
console.log(window.screenX);
console.log(window.screenY);

window.addEventListener("scroll", () => {
  console.log(window.scrollX, window.scrollY);
})



// 整个浏览器窗口的高度（包括侧边栏、窗口）
console.log(window.outerHeight);

// 页面的高度 
console.log(window.innerHeight);


// 2.常见方法
const scrollBtn = document.querySelector("#btn")
scrollBtn.onclick = function () {
  // 1.scrollTo
  // window.scrollTo({ top: 2000 })

  // 2.close
  // window.close()

  // 3.open
  // window.open("http://www.baidu.com", "_self")
}

// 3.常见的事件
window.onload = function () {
  console.log("window窗口加载完毕~~");
}

window.onblur = function () {
  console.log("window窗口获取焦点~~~");
}

window.onblur = function () {
  console.log("window窗口失去焦点~~~");
}

const hashChagneBtn = document.querySelector("#hashChagneBtn")
hashChagneBtn.onclick = function () {
  location.hash = "aa"
}

window.onhashchange = function () {
  console.log("hash发生了改变");
}

