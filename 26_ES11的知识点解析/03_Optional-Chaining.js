// 可选链的操作符是 ?.
// 它的作用是当对象的属性不存在时，会短路，直接返回 undefined，如果存在，那么才会继续执行
// 
const info = {
  name: "helle",
  friend:{
    name:"lilei",
    girlFriend:{
      name:"hanmm"
    }
  }
}

// console.log(info.friend.girlFriend.name)

// 获取 friend 时 friend属性 不存在了，获取 info.friend.girlFriend.name
// 就会报错

// 为了防止报错
if (info && info.friend && info.friend.girlFriend) {
  console.log(info.friend.girlFriend.name)
}

// ES11 提供了 可选链 (Optional Chaining)
console.log(info.friend?.girlFriend)  // undefined 没有 friend 后面的就会不执行
console.log(info.friend?.girlFriend?.name)  // hanmm

 

