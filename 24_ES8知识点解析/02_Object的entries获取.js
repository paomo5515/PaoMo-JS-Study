const obj = {
  name: "hello",
  age: 14
}

console.log(Object.entries(obj)) // [ [ 'name', 'hello' ], [ 'age', 14 ] ]

const objEntries = Object.entries(obj)
objEntries.forEach(item => {
  console.log(item[0], item[1]) // ame hello  // ame hello
})


// [ [ '0', 'aa' ], [ '1', 'bb' ], [ '2', 'cc' ] ]
console.log(Object.entries(["aa", "bb", "cc"]))


// [ [ '0', 'a' ], [ '1', 'b' ], [ '2', 'c' ] ]
console.log(Object.entries("abc"))