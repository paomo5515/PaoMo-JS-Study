var names = ["abc", "bcd", "cde"]

// 数组的解构
var [item1, item2, item3] = names
console.log(item1, item2, item3) // abc bcd cde

// 解构后面的两个元素
var [, itema, itemb] = names
console.log(itema, itemb) // bcd cde


// 解构出一个元素，后面的元素放到一个新的数组
var [itemz, ...newNames] = names
console.log(itemz, newNames)  // abc [ 'bcd', 'cde' ]

// 解构的默认值
var [itemA, itemB, itemC, itemD = "aaa"] = names
console.log(itemD) // aaa