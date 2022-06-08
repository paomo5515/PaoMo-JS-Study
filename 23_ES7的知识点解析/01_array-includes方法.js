const names = ["aaa", "bbb", "ccc", NaN]

if (names.indexOf("bbb") !== -1) {
  console.log("包含 aaa 元素")
}

// ES7 (ES2016)
// 第二个参数是 开始的位置
if (names.includes("bbb", 1)) {
  console.log("包含 bbb 元素") // 包含 bbb 元素
}

// 对 NaN 的判断，没法判断 NaN
if (names.indexOf(NaN) !== -1) {
  console.log("包含 NaN")
}

if (names.includes(NaN)) {
  console.log("包含 NaN") // 包含 NaN
}