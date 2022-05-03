const spanEl = document.querySelector(".span")
spanEl.addEventListener("click", () => {
  console.log("事件冒泡：span元素被点击了");
})

const divEl = document.querySelector(".container")
divEl.addEventListener("click", () => {
  console.log("事件冒泡：div元素被点击了");
})

document.body.addEventListener("click", () => {
  console.log("事件冒泡：body元素被点击了");
})

// 再次监听
spanEl.addEventListener("click", () => {
  console.log("事件捕获：span元素被点击了");
}, true)

divEl.addEventListener("click", () => {
  console.log("事件捕获：div元素被点击了");
}, true)

document.body.addEventListener("click", (event) => {
  console.log("事件捕获：body元素被点击了");
  event.stopPropagation() // 阻止传递
}, true)

// 有事件捕获和有事件冒泡，先捕获再冒泡