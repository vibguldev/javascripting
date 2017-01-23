arrIndex = 0;
function reduceRecursive(arr, fn, initial) {
    if (arrIndex === arr.length)
        return initial;
    fn(initial, arr[arrIndex], arrIndex, arr);
    arrIndex++;
    reduceRecursive(arr, fn, initial);
    return initial;
}

module.exports = reduceRecursive;