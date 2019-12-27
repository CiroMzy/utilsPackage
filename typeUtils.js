
module.exports = {
    isUndef: (v) => {
        return v === undefined || v === null
    },
    isDef: (v) => {
        return v !== undefined && v !== null
    },
    isTrue: (v) => {
        return v === true
    },
    isFalse: (v) => {
        return v === false
    },
    isPrimitive: (v) => {
        return (
            typeof v === 'string' ||
            typeof v === 'number' ||
            typeof v === 'symbol' ||
            typeof v === 'boolean'
        )
    },
    isObject: (v) => {
        return v !== null && typeof v === 'object'
    },
    isString: (v) => {
        return typeof v === "string"
    },

}
