const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe('Testing Letter Positions', ()=>{
  it('should return an object with characters and keys and array as values',()=>{
    const input = "hello";
    const expectedOutput = { h: [0], e: [1], l: [2,3], o: [4]};
    const result = letterPositions(input);
    assert.deepEqual(result, expectedOutput);
  });

  it('should return an object ignoring white spaces', ()=>{
    const input = "hi there";
    const expectedOutput = { h: [0, 4], i: [1], t: [3], e: [5, 7], r: [6]};
    const result = letterPositions(input);
    assert.deepEqual(result, expectedOutput);
  });

});