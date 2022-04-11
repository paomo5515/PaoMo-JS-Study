function createFnArray() {

  var arr = new Array(1024 * 1024).fill(1)
  return function () {
    console.log(arr.length);
  }
}

var arrayFn = createFnArray()
// arrayFn = null

var arrayFns = []
for (let i = 0; i < 100; i++) {
  setTimeout(() => {
    arrayFns.push(createFnArray())
  }, i + 100);
}

// arrayFns = null
setInterval(() => {
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      arrayFns.pop()
    }, 100 + i)

  }
}, 10000);
