const assert = require('chai').assert;
const findKey = require('../findKey');



describe('Testing Find Key', ()=>{

  it('should return the key based on a callback function', ()=>{
    const searchableObject = {"a": "Alex", "b": "Bob", "c": "Charlie"};
    const callbackFn = x => x === "Bob";
    const result = findKey(searchableObject, callbackFn);
    const expectedOutput = "b";
    assert.equal(result, expectedOutput);
  });

  it('should return the key searching with nested values', ()=>{
    const searchableObject = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };

    const callbackFn = x => x.stars === 2;
    const result = findKey(searchableObject, callbackFn);
    const expectedOutput = "noma";
    assert.equal(result, expectedOutput);
  });

});