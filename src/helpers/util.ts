
const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export const isObject = (val: any): val is Object => {
  return val !== null && typeof val === 'object'
}