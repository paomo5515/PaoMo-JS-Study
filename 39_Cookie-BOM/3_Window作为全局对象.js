/* 
    Window 对象在浏览器中有两个身份：
  身份一：全局对象。
    我们知道 ESCMAScript 其实是有一个全局对象的，这个全局对象在 Node 中是 global；
    在浏览器中就是 window 对象；
  身份二：浏览器窗口对象。
    作为浏览器窗口时，提供了对浏览器操作的相关 API；

    事实上 Window 对象上肩负的重担是非常大的：
  第一：包含大量的属性，localStorage、console、location、history、screenX、scrollX 等等（大概60+个属性）；
  第二：包含大量的方法，alert、close、scrollTo、open等等（大概40+个方法）；
  第三：包含大量的事件，focus、blur、load、hashchange等等（大概30+个事件）；
  第四：包含从 EventTarget 继承过来的方法 addEventListener、removeEventListener、dispatchEventListener方法；
  
    Window 类 继承自 EventTarget 类（里面有 addEvevtListtener等等）
    为什么 div.addEventListener 因为它们继承自 EventTarget
*/
var message = "Hello Word"
var age = 20

window.setTimeout(() => {
  console.log("setTimeout");
})

const obj = new window.Date()
console.log(obj);