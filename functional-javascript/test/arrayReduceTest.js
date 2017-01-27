var assert = require('assert');
var callFunction = require('../arrayReduce');
//might have bugs in code in test cases
//multiple positive test cases
//repitition of one element
//***check for empty strings***
describe('#positive case# for the function countWords that returns a count of every distinct string in the input array using reduce function; imp: the function countWords takes only one argument and that is an array of strings', function () {
  it('should return the true count for each and every distinct element of the input array', function () {
    var sampleArray = ['Apple', 'Pineapple', 'Apple', 'Durian', 'Durian', 'Durian'];
    var sampleDict = {};
    for (index in sampleArray) {
      var item = sampleArray[index];
      if (item in sampleDict) {
        sampleDict[item]++;
      }
      else {
        sampleDict[item] = 1;
      }
    }
    // doubt
    assert.equal(JSON.stringify(callFunction(sampleArray)), JSON.stringify(sampleDict));
  });
});
//spaces after it
describe('#negative case# for the function countWords that returns a count of every distinct string in the input array using reduce function; imp: the function countWords takes only one argument and that is an array of strings', function () {
  it('should return false as the input arguments is not an array', function () {
    var randString = Math.random().toString(36).substring(20);
    assert.equal(callFunction(randString), false);
  });
  it('should return error as all the elements of the input array are not string', function () {
    var sampleArray = ["hello", 4, {}, "hi"];
    var resultOfTheCallFunction = callFunction(sampleArray);
    var locationOfError = resultOfTheCallFunction[1];
    assert.equal(resultOfTheCallFunction[0] + sampleArray[locationOfError], "element of the array is not of type string at the location " + sampleArray[locationOfError]);
  });
  it('should return error as the array that was passed contained no elements', function () {
    var sampleArray = [];
    assert.equal(callFunction(sampleArray), "null array not allowed");

  });
//use single quotes
//check for exceptions even if your code handles
//APPLE AND apple
});