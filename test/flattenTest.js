const assert = require('chai').assert;
const flatten = require('../flatten');

describe('Testing flatten', ()=>{
  it('should flatten a multidimensional array of numvers', ()=>{
    const input = [1,2,3,[4,5]];
    const expectedOutput = [1,2,3,4,5];
    const result = flatten(input);
    assert.deepEqual(result, expectedOutput);
  });
  it('should flatten a multidimensional array of strings', ()=>{
    const input = ["a", "b", ["c", "d"]];
    const expectedOutput = ["a", "b", "c", "d"];
    const result = flatten(input);
    assert.deepEqual(result, expectedOutput);
  });
  it('should flatten a mixed multidimensional array', ()=>{
    const input = [8, 10, ["c", "d"]];
    const expectedOutput = [8, 10, "c", "d"];
    const result = flatten(input);
    assert.deepEqual(result, expectedOutput);
  });
  it('should return an empty array when input is an empty array', ()=>{
    const input = [];
    const expectedOutput = [];
    const result = flatten(input);
    assert.deepEqual(result, expectedOutput);
  });
});
