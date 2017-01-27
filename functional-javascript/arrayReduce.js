function countWords(inputWords) {
  var indexOfArray;
  if (inputWords instanceof Array === true) {
    if (inputWords.length > 0) {

      if (inputWords.every(function (inputWord, index) {
        indexOfArray = index;
        return (typeof inputWord) === 'string'
      })) {
        var fruitDictionary = inputWords.reduce(function createDict(allfruits, fruit) {
          if (fruit in allfruits) {
            allfruits[fruit]++;
          }
          else {
            allfruits[fruit] = 1;
          }
          return allfruits;

        }, {});
        return fruitDictionary;
      } else {
        return ["element of the array is not of type string at the location ", indexOfArray]
      }
    } else {
      return "null array not allowed"

    }
  }
  else {
    return inputWords instanceof Array
  }

}

module.exports = countWords;
