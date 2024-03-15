const tail = require('../tail');
const assert = require('chai').assert;


describe('Testing middle', ()=>{
  it('should return an array without the first element of an array of numbers', ()=>{
    const input = [1, 2, 3, 4];
    const expectedOutput = [2, 3, 4];
    const result = tail(input);
    assert.equal(result.length, 3);
    assert.deepEqual(tail(input), expectedOutput);
  });
  
  it('should return an array without the first element of an array of strings', ()=>{
    const input = ["Hello", "Lighthouse", "Labs"];
    const expectedOutput = ["Lighthouse", "Labs"];
    const result = tail(input);
    assert.equal(result.length, 2);
    assert.deepEqual(tail(input), expectedOutput);

  });
  
  it('should return an empty array when input array has only one element', ()=>{
    const result = tail(["onlyElement"]);
    assert.equal(result.length, 0);
  });
  
  it('should return an empty array when input array is empty', ()=>{
    const result = tail([]);
    assert.equal(result.length, 0);
  });

});


