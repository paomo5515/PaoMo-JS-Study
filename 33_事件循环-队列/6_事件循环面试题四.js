async function async1() {
  console.log("async1 start")  // 2. "async1 start"
  await async2()
  console.log("async1 end")  // 9. "async1 end"
}

async function async2() {
  console.log("async2")  // 3. "async2"
}

console.log("script start") // 1. "script start"

setTimeout(() => {
  console.log("setTimeout0") // 11."setTimeout0"
}, 0);

setTimeout(() => {
  console.log("setTimeout2") // 13. "setTimeout2"
}, 300);

setImmediate(() => console.log("setImmediate")) // 12. "setImmediate"

process.nextTick(() => console.log("nextTick1")) // 7. "nextTick1"

async1()

process.nextTick(() => console.log("nextTick2")) // 8. "nextTick2"

new Promise((resolve) => {
  console.log("promise1")  // 4. "promise1"
  resolve()
  console.log("promise2")  // 5. "promise2"
}).then(() => {
  console.log("promise3") // 10. "promise3"
})

console.log("script end")  // 6. "script end"

/*
    script start
    async1 start
    async2
    promise1
    promise2
    script end
    nextTick1
    nextTick2
    async1 end
    promise3
    setTimeout0
    setImmediate
    setTimeout2
*/