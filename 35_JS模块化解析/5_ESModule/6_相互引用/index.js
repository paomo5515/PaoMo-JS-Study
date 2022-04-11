// ES Module 导入
import { name, age } from "./foo.js"

console.log(name, age)

// commonJS 导入
const bar = require("./bar")
console.log(name, age)