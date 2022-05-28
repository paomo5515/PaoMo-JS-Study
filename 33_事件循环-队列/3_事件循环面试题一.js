setTimeout(function () {
  console.log("setTimeout1") // 5 setTimeout1

  new Promise(function (resolve) {
    resolve()
  }).then(function () {
    new Promise(function (resolve) {
      resolve()
    }).then(function () {
      console.log("then4")  // 7 then4
    })
    console.log("then2") // 6 then2
  })
});


new Promise(function (resolve) {
  console.log("promise1") // 1 promise1
  resolve()
}).then(function () {
  console.log("then1") // 2 then1
})

setTimeout(function () {
  console.log("setTimeout2") // 8 setTimeout2
});

console.log(2) // 1 2

queueMicrotask(() => {
  console.log("queueMicrotask1") // 3 queueMicrotask1
})

new Promise(function (resolve) {
  resolve()
}).then(function () {
  console.log("then3") // 4 then3
})

/*
promise1
then1
queueMicrotask1
then3
setTimeout1
then2
then4
setTimeout2
 */

// 1.10.25