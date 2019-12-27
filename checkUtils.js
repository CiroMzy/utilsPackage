const regUtils = require('./regUtils')
const typeUtils = require('./typeUtils')
const objUtils = require('./objUtils')


function CheckUtils() {
    this.initRegUtils()
}
CheckUtils.prototype.initRegUtils = function () {
    const utils = objUtils.extend(regUtils, typeUtils)
    console.log('utils')
    console.log(utils)
    for (let key in utils) {
        this[key] = (value) => {
            if (typeUtils.isUndef(value)) {
                return false
            }
            value += ''
            return regUtils[key].test(value)
        }
    }

}


module.exports = new CheckUtils()
