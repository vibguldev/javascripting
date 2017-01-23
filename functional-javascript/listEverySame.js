function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function matchEveryWithGoodUers(submittedUser) {
            return goodUsers.some(function macthSomewithSubmitredUsers(goodUser)
            {
                return submittedUser.id === goodUser.id
            })

        })
    };
}

module.exports = checkUsersValid