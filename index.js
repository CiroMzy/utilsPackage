// 对象操作工具
const objUtils = require('./objUtils.js')
// 格式校验工具
const checkUtils = require('./checkUtils.js')

module.exports = objUtils.extend(objUtils, checkUtils)
