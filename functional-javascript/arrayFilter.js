function getShortMessages(messages) {
  filteredShortMessages = messages.filter(function filter(singleMessageObject) {
    return singleMessageObject.message.length < 50
  })
  return filteredShortMessages.map(function messageSeparation(singleMessageObject) {
    return singleMessageObject.message
  })

}


module.exports = getShortMessages;



