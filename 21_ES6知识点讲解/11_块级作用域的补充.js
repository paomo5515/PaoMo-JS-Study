const names = ["abc", "bbc", "cde"]

for (let i = 0; i < names.length; i++) {
  // console.log(names[i])
}

// for...of：ES6新增的遍历数组（对象）
for (const item of names) {
  console.log(item)
}

for (let iten in names) {
  console.log(iten)
}