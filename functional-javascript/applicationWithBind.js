var slice = Array.prototype.slice

function logger(namespace) {
    var mergedMessage =  function() {
        var arr = slice.bind(arguments);
        console.log.apply(null,[namespace].concat(arr()))

    }
    return mergedMessage
}


module.exports = logger