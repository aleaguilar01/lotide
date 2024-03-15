
const countLetters = require('../countLetters');
const assert = require('chai').assert;


describe('Testing Count letters', ()=>{
  it('should count the amount of letters of a single word',()=>{
    const result = countLetters("maria");
    const expectedOutput = {m : 1, a: 2, r: 1, i : 1};
    assert.deepEqual(result, expectedOutput);
  });
      
  it('should count the amount of letters excluding spaces',()=>{
    const result = countLetters("aaa bbb ccc");
    const expectedOutput = {a: 3, b: 3, c: 3};
    assert.deepEqual(result, expectedOutput);
  });
  it('should return an empty object for an empty string',()=>{
    const result = countLetters("");
    const expectedOutput = {};
    assert.deepEqual(result, expectedOutput);
  });

  it('should include non-alphabetic characters', function() {
    const result = countLetters('apple123!');
    const expectedOutput = { a: 1, p: 2, l: 1, e: 1, "!": 1, 1: 1, 2: 1, 3: 1 };
    assert.deepEqual(result, expectedOutput);
  });
});

