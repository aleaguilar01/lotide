const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe('Testing find key by value', ()=>{
  it('should return undefined when searching for an empty string', ()=>{
    const input = "";
    const result = findKeyByValue(bestTVShowsByGenre,input);
    const expectedOutput = undefined;
    assert.equal(result, expectedOutput);
  });

  it('should return the key of an existant value', ()=>{
    const input = "The Wire";
    const result = findKeyByValue(bestTVShowsByGenre,input);
    const expectedOutput = "drama";
    assert.equal(result, expectedOutput);
  });

  it("should return undefined when the value doesn't exists", ()=>{
    const input = "That '70s Show";
    const result = findKeyByValue(bestTVShowsByGenre,input);
    const expectedOutput = undefined;
    assert.equal(result, expectedOutput);
  });

});