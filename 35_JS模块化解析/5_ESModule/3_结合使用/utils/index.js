// 导出方式一
/* import { add, sub } from "./math.js"
import { priceFromat, timeFormat } from "./format.js"

export {
  add,
  sub,
  priceFromat,
  timeFormat
} */

// 导出方式二：
export { add, sub } from "./math.js"
export { priceFormat, timeFormat } from "./format.js"

// 导出方式三：
// export * from "./math.js"
// export * from "./format.js"


