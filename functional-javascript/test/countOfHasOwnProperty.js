var assert = require('assert');
var callFunction = require('../countOfHasOwnProperty');
describe('function countQuacks returning the number of objects having "quack" as their own property', function () {
  it('should return the true count for every argument having quack as its own property', function () {
    assert.equal(callFunction({},{quack: true}, {Quack: false}, {QUACK: true}, {quAck: true}), 4);
  });
});
//spaces after it
describe('function countQuacks returning the number of objects having "quack" as their own property', function () {
  xit('should return false as the input arguments is not an array', function () {
    var randString = Math.random().toString(36).substring(20);
    assert.equal(callFunction(randString), false);
  });
  xit('should return error as all the elements of the input array are not string', function () {
    var sampleArray = ["hello", 4, {}, "hi"];
    var resultOfTheCallFunction = callFunction(sampleArray);
    var locationOfError = resultOfTheCallFunction[1];
    assert.equal(resultOfTheCallFunction[0] + sampleArray[locationOfError], "element of the array is not of type string at the location " + sampleArray[locationOfError]);
  });
  it('should return error as the array that was passed contained no elements', function () {
    assert.equal(callFunction(), 'pass atleast one argument');

  });
//use single quotes
//check for exceptions even if your code handles
//APPLE AND apple
});