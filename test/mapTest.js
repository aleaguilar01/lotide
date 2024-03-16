const assert = require('chai').assert;
const map = require('../map');

describe('Testing map', ()=>{
  it('should return an array with the first letter of each element', ()=>{
    const input =  ["Alex", "John", "Rita", "Jessie", "Claudia"];
    const callbackFn = name => name[0];
    const expectedOutput = ["A", "J", "R", "J", "C"];
    const result = map(input, callbackFn);
    assert.deepEqual(result, expectedOutput);
  });
  it('should return an array where 2 is added to each element', ()=>{
    const input = [1, 2, 3, 4, 5];
    const callbackFn = n => n + 2;
    const expectedOutput = [3, 4, 5, 6, 7];
    const result = map(input, callbackFn);
    assert.deepEqual(result, expectedOutput);
  });
  it('should map boolean values to 1 and 2', ()=>{
    const input = [true, true, false, false];
    const callbackFn = b => {
      if (b) {
        return 1;
      } else {
        return 2;
      }
    };
    const expectedOutput = [1, 1, 2, 2];
    const result = map(input, callbackFn);
    assert.deepEqual(result, expectedOutput);
  });
});