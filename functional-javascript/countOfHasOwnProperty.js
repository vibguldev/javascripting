// function duckCount() {
// if (arguments.length <= 0){
//     return 0;
// }
// // console.log(arguments);
// // console.log("\n\n\n");
// var a = Array.prototype.slice.call(arguments,1); //doubt
// var remaining = duckCount.apply(null,a);
// // console.log(a);
// if (Object.prototype.hasOwnProperty.call(arguments[0], 'quack')) {
//     return remaining = remaining + 1;
// }
// else {
//     return 0;
// }

// }






//check for argument.length > 0
//quack, Quack, QUACK

function countQuacks() {
    // console.log(arguments);
    if (arguments.length <= 0) {
        return 'pass atleast one argument';
    }
    else {
        var arrOfArguments = Array.prototype.slice.call(arguments);
        
        var listOfQuacks = arrOfArguments.filter(function count(obj) {
            // console.log(obj);
            console.log("keys : ",Object.keys(obj)[0]);
            console.log("new keys : ",String(Object.keys(obj)[0]).toLowerCase())
            obj[String(Object.keys(obj)[0]).toLowerCase()] = obj[Object.keys(obj)[0]];
            delete obj[Object.keys(obj)[0]];
            console.log("new : ",obj);
            return Object.prototype.hasOwnProperty.call(obj, 'quack')
        })
        return listOfQuacks.length
    }
}



module.exports = countQuacks;
