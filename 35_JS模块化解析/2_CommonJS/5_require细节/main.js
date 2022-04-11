// 情况一：require(X)  X 是一个 Node核心模块，比如path、http
// 直接返回核心模块，并且停止查找
/* const path = require("path")
const fs = require("fs")

path.resolve()
fs.readFile() */


/* 
  // 情况二： X是以 ./或 ../（根目录）开头的
  第一步：将 X 当做一个文件在对应的目录下查找；
    1.如果有后缀名，按照后缀名的格式查找对应的文件
    2.如果没有后缀名，会按照如下顺序：
      1>直接查找文件 X
      2>查找 X.js 文件
      3>查找 X.json文件
      4>查找 X.node 文件
  第二步：没有找到对应的文件，将 X 作为一个目录
    查找目录下面的 index.js 文件
      1>查找 X/index.js 文件
      2>查找 X/index.json 文件
      3>查找 X/index.node 文件
  如果没有找到，那么报错： not found
*/
// const abc = require("./abc")

console.log(module.paths)
