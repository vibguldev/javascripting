var assert = require('assert');
var callFunction = require('../passingFunctionAsArgument');
var limit = 5;
//xit, naming, always mention positive testcases first

describe('number of times the function is called', function () {
  xit('should return error as type not function', function () {
    assert.equal(callFunction('bA', 2), "not an operation");
  });
  xit('should return error as type not number', function () {
    var a = function () { };
    assert.equal(callFunction(a, "string"), "not a number");
  });
  xit('check that the function ran the specified number of times', function () {
    var a = function () { //stub this function in order to remove the syntactic error of the function body
      // console.lo('hi');
    };
    assert.equal(callFunction(a, limit), 0);

  });
  xit('check that the function had sufficient arguments', function () {
    assert.equal(callFunction(), "insufficient arguments");

  });
  xit('check that the function had null as arguments', function () {
    assert.equal(callFunction(null,null), "not an operation");

  });
});