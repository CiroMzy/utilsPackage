/************************
 * 校验类
 *  类型校验
 *  正则校验
 *
 */

const regUtils = require('./regUtils')
const typeUtils = require('./typeUtils')
const objUtils = require('./objUtils')

const checkUtils = {}


Object.keys(regUtils).forEach(key => {
    checkUtils[key] = (value) => {
        if (typeUtils.isUndef(value)) {
            return false
        }
        value += ''
        return regUtils[key].test(value)
    }
})

Object.keys(typeUtils).forEach(key => {
    checkUtils[key] = typeUtils[key]
})


module.exports = checkUtils
