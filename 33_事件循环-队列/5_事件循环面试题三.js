Promise.resolve().then(() => {
  console.log(0)
  // 第一种情况,直接 return 一个值，相当于 resolve(4) 
  // return 4

  // 第二种情况：return thenable的值，相当于 推迟一个微任务
  /* return {
    then(resolve) {
      resolve(4)
    }
  } */

  // 第三种情：return Promise
  // 不是普通的值，相当于 推迟一个微任务
  // Promise.resolve(4)，相当于 再推迟一个微任务
  return Promise.resolve(4)

}).then((res) => {
  console.log(res)
})


Promise.resolve().then(() => {
  console.log(1)
}).then(() => {
  console.log(2)
}).then(() => {
  console.log(3)
}).then(() => {
  console.log(5)
}).then(() => {
  console.log(6)
})

// 第一种情况
// 0 1 4 2 3 5 6 

// 第二种情况
// 0 1 2 4 3 5 6 

//第三种情况下
// 0 1 2 3 4 5 6