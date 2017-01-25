var assert = require('assert');
var upperCaser=require('../convertToUpperCase');
describe('#Upper Case Check',function()
{
   xit('should return the String in UpperCase',function()
   {
       assert.equal('BA',upperCaser('bA'));
   });
    xit('should return the String in UpperCase',function()
   {
       assert.equal('BA',upperCaser('Ba'));
   });
});