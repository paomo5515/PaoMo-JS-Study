const info = {
  name: "hello",
  friend: { name: "tom" }
}

const obj = { ...info, name: "word" }
console.log(obj) // { name: 'word', friend: { name: 'tom' } }

// 通过 obj.friend 找到了 info.friend
obj.friend.name = "jerry"
console.log(info.friend.name)  // jerry