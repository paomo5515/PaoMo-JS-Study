async function bar() {
  console.log("22222")  // 2. "22222"
  return new Promise((resolve) => {
    resolve()
  })
}

async function foo() {
  console.log("11111")  // 1. "11111"

  await bar()

  // 可以看作是，第三行 Promise 的 then 里面执行的，被加入到 微任务
  console.log("33333") // 4."33333"
}
foo()

console.log("44444") // 3. "44444"

/* --------------------------- */

async function async1() {
  console.log("async1 start") // 2. "async1 start"
  await async2()
  console.log("async1 end")  // 6. "async1 end"
}

async function async2() {
  console.log("async2") // 3. "async2"
}

console.log("script start")  // 1. "script start"

setTimeout(() => {
  console.log("setTimeout") // 8. "setTimeout"
}, 0);

async1()

new Promise((resolve) => {
  console.log("promise1")  // 4. "promise1"
  resolve()
}).then(function () {
  console.log("promise2") // 7. "promise2"
})

console.log("script end")  // 5. "script end"

/*
    script start
    async1 start
    async2      
    promise1    
    script end
    async1 end
    promise2
    setTimeout 
 */