var slice = Array.prototype.slice

function logger(namespace) {
    var mergedMessage =  function() {
        var arr = slice.call(arguments);
        var consoleMessages = console.log.bind(this,namespace);
        consoleMessages(arr.join(' '));


    }
    return mergedMessage
}

module.exports = logger