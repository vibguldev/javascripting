module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function (outputArray, inputArrayElement) {
        outputArray.push(fn(inputArrayElement))
        return outputArray
    }, [])
}