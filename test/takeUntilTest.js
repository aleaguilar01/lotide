const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('Testing Take Until',()=>{
  it('should return elements to an array until the first negative number', ()=>{
    const input = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const callbackFn = x => x < 0;
    const expectedOutput = [1, 2, 5, 7, 2];
    const result = takeUntil(input, callbackFn);
    assert.deepEqual(result, expectedOutput);
  });
  it('should return elements to an array until a comma is found',()=>{
    const input = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const callbackFn = x => x === ',';
    const expectedOutput = ["I've", "been", "to", "Hollywood"];
    const result = takeUntil(input, callbackFn);
    assert.deepEqual(result, expectedOutput);
  });
  it('should return elements to an array until first odd number',()=>{
    const input = [2, 4, 6, 8, 10, 11, 13, 15, 17];
    const callbackFn = x => x % 2 !== 0;
    const expectedOutput = [2, 4, 6, 8, 10];
    const result = takeUntil(input, callbackFn);
    assert.deepEqual(result, expectedOutput);
  });
  it('should return all elements if the condition is not meet',()=>{
    const input = ["a", "b", "c", "d", "e"];
    const callbackFn = x => x === "z";
    const expectedOutput = ["a", "b", "c", "d", "e"];
    const result = takeUntil(input, callbackFn);
    assert.deepEqual(result, expectedOutput);
  });
});


