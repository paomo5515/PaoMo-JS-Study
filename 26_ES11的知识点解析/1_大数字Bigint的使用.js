// ES11 之前
const maxInt = Number.MAX_SAFE_INTEGER
console.log(maxInt)  // 9007199254740991
console.log(maxInt + 1)  // 9007199254740992
console.log(maxInt + 2)  // 9007199254740992

// ES11 之后 Bigint
const bigint = 9007199254740992n
console.log(bigint)  // 9007199254740992n
// console.log(bigint + 10)  // 类型不一样  会报错
console.log(bigint + 10n)

const num = 100
console.log(bigint + BigInt(num))

// 将 大数 转为 Number 类型，有可能存在不安全
const smalNum = Number(bigint)