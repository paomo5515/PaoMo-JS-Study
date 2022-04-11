// 1.导入方式一：普通的导入
// import { name, age, foo } from "./foo.js" // 1 2
import { fName, fAge, fBar } from "./foo.js"

// 导入方式二：起别名
import { name as fName, age as fAge, foo } from "./foo.js"

// 导入方式三：可以将导出的所有内容放到一个标识符中
import * as foo from "./foo.js"
const name = "main"
console.log(foo.name, foo.age)
foo.foo()