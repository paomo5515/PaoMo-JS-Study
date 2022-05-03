const divEl = document.querySelector("#box")

// 常见的属性
console.log(divEl.id); // box
console.log(divEl.tagName); // DIV
console.log(divEl.children);
console.log(divEl.className); // abc
console.log(divEl.clientWidth);
console.log(divEl.offsetLeft);

// 常见的方法
const value = divEl.getAttribute("age")
console.log(value); // 18
divEl.setAttribute("height", 1.88)
