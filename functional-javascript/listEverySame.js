function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers,goodUsers){
    var element;
    var index;
    var array;
    var a = submittedUsers.every(abc(goodUser))
  }
      
function abc(goodUser)
{
  return function (element, index, array){
    

  }
}
      matchEveryWithGoodUers(element, index, array, 1, goodUsers));
  return a;

  }

}


function matchEveryWithGoodUers(element, index, array, a, goodUsers) {
  var submit = element;
  var element1;
  var index1;
  var array1;
  return goodUsers.some(matchSomewithSubmitedUsers(element1, index1, array1, submit))

}



function matchSomewithSubmitedUsers(element, index, array, submit) {
  var submittedUser = submit;
  var goodUser = element;
  return submittedUser.id === goodUser.id

}






// function checkUsersValid(goodUsers) {
//   return function allUsersValid(submittedUsers) {
//     return submittedUsers.every(function matchEveryWithGoodUers(submittedUser) {
//       return goodUsers.some(function macthSomewithSubmitredUsers(goodUser) {
//         return submittedUser.id === goodUser.id
//       })

//     })
//   };
// }

module.exports = checkUsersValid