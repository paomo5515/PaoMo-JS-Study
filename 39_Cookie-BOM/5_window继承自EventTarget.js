const clickHandler = () => {
  console.log("window发生了点击")
}

window.addEventListener("click", clickHandler)

window.removeEventListener("click", clickHandler)


window.addEventListener("paomo", () => {
  console.log("监听到了paomo事件~~~");
})

// 派发事件
window.dispatchEvent(new Event("paomo"))
