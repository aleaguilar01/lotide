const assert = require('chai').assert;
const middle = require('../middle');

describe('Testing middle', ()=>{

  it('returns the middle element of an array of numbers',()=>{
    assert.deepEqual((middle([1,2,3,4,5])), [3]);
  });

  it('returns an empty array if there original array contains just one value',()=>{
    assert.deepEqual((middle([1])), []);
  });

  it('returns an empty array if there is no middle value',()=>{
    assert.deepEqual((middle([1,2])), []);
  });

  it('returns two elements in the array if the array contains two middle values',()=>{
    assert.deepEqual((middle([1,2,3,4,5,6,7,8,9,10])), [5,6]);
  });

  it('returns an empty array of an empty array',()=>{
    assert.deepEqual((middle([])), []);
  });

  it('returns the middle character of an array',()=>{
    assert.deepEqual((middle(["a", "e", "i"])), ["e"]);
  });

  it('returns the two middle characters of an array with two middle values',()=>{
    assert.deepEqual((middle(["a", "e", "i", "o"])), ["e", "i"]);
  });

});