var slice = Array.prototype.slice;

function Spy(target, method) { 
    var spy = {
        count : 0
    };
    // console.log(arguments);
    // Object.prototype.hasOwnProperty()
    var newFunc = target[method];
    target[method] = function (){
        spy.count++;
    // console.log(arguments);
        var arr = slice.call(arguments);
        return newFunc.apply(target,arr);
    }
    return spy;
    
    
}

module.exports = Spy