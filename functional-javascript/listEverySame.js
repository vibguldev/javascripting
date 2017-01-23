function allUsersValid(submittedUsers) {
  return submittedUsers.every(function matchEveryWithGoodUers(submittedUser) {
      return goodUsers.some(function macthSomewithSubmitredUsers(goodUser) {
        return submittedUser.id === goodUser.id
      })

    })

}













function checkUsersValid(goodUsers) {
  var allUsersValid = function allUsersValid(submittedUsers);
  return allUsersValid;
}

module.exports = checkUsersValid





// function checkUsersValid(goodUsers) {
//   return function allUsersValid(submittedUsers) {
//     return submittedUsers.every(function matchEveryWithGoodUers(submittedUser) {
//       return goodUsers.some(function macthSomewithSubmitredUsers(goodUser) {
//         return submittedUser.id === goodUser.id
//       })

//     })
//   };
// }

// module.exports = checkUsersValid