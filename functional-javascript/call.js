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


function countQuacks() {
    // console.log(arguments)
    if (arguments.length <= 0) {
        return 0;
    }
    else {
        var arrOfArguments = Array.prototype.slice.call(arguments);  //doubt
        // console.log(arr);
        var listOfQuacks = arrOfArguments.filter(function count(obj) {
            return Object.prototype.hasOwnProperty.call(obj, 'quack')
        })
        return listOfQuacks.length
    }
}



module.exports = countQuacks;


// function display()
// {
//     var a = 2;
//     if (1===1){
//         let b=4;
//     }
//     console.log(a);
//     console.log(b);
// }

// display();