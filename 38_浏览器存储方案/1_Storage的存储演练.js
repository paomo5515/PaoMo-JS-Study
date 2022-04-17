/*
    WebStorage主要提供了一种机制，可以让浏览器提供一种比 cookie更直观的key、value存储方式；
      localStorage：本地存储，提供的是一种永久性的存贮方法，在关掉网页重新打开时，存储的内容依然保留；
      sessionStorage：会话存储，提供的是本次会话的存储，在关闭掉会话时，存储的内容会被清除；  

    LocalStorage和sessionStorage的区别
      1.关闭网页后重新打开，localStorage会保留，而sessionStorage会被删除；
      2.在页面内实现跳转，localStorage会保留，sessionStorage也会保留；
      3.在页面外实现跳转（打开新的网页），localStorage会保留，sessionStorage不会被保留；
*/

const loginBtn = document.getElementById("login")
loginBtn.onclick = function () {
  localStorage.setItem("name", "localStorage")
  sessionStorage.setItem("name", "sessionStorage")
}
