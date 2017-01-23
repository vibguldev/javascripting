module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function (outputArray,inputArrayElement){
        console.log
        outputArray.push(fn(inputArrayElement))
        return outputArray
    },[])
}