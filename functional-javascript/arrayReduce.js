function countWords(inputWords) {
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

}

module.exports = countWords;
