function divClick() {
  console.log("div元素被点击2");
}

// DOM0
const divEl = document.querySelector(".box")
divEl.onclick = () => {
  console.log("div元素被点击3");
}

// DOM2 常用
divEl.addEventListener("click", () => {
  console.log("div元素被点击4");
})
divEl.addEventListener("click", () => {
  console.log("div元素被点击5");
})
divEl.addEventListener("click", () => {
  console.log("div元素被点击6");
})
