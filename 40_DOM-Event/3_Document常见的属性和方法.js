// 常见的属性
console.log(document.body);

console.log(document.title);

document.title = "Hello Word"

console.log(document.head);
console.log(document.children[0]);

console.log(window.location);
console.log(document.location);  // 两个没有区别

// 常见的方法
// 创建元素
const imgEl1 = document.createElement("img")
const imgEl2 = new HTMLImageElement() // 两个方法一样

// 获取元素
const divEl1= document.getElementById("#box")
const divEl2 = document.getElementsByTagName("div")
const divEl3 = document.getElementsByName("title")
const divEl4 = document.querySelector(".content")

