const message = "Hello Word"

// 参数一：需要填充的 长度， 参数二：填充的内容
const newMsg = message.padStart(15, "*").padEnd(20, "-")
console.log(newMsg) // *****Hello Word-----

// 案例
// 处理银行卡号
const cardNum = "32455646413455413"
const lastFourCard = cardNum.slice(-4)
const finalCard = lastFourCard.padStart(cardNum.length, "*")
console.log(finalCard) // *************5413