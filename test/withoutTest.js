const without = require('../without');
const assert = require('chai').assert;

describe('Testing without', ()=>{
  it('should remove specific numbers from original array', ()=>{
    const input = [1,2,3,4,5];
    const elementsToRemove = [2,4];
    const expectedOutput = [1, 3, 5];
    const result = without(input, elementsToRemove);
    assert.deepEqual(result, expectedOutput);
  });

  it('should remove specific characters from original array', ()=>{
    const input = ["a", "b", "c", "d"];
    const elementsToRemove = ["b"];
    const expectedOutput = ["a", "c", "d"];
    const result = without(input, elementsToRemove);
    assert.deepEqual(result, expectedOutput);
  });

  it('should not remove any element if no element is specified to be removed', ()=>{
    const input = ["a", "b", "c", "d"];
    const elementsToRemove = [];
    const expectedOutput = ["a", "b", "c", "d"];
    const result = without(input, elementsToRemove);
    assert.deepEqual(result, expectedOutput);
  });

  it('should not remove specified words', ()=>{
    const input = ["hello", "world", "lighthouse"];
    const elementsToRemove = ["lighthouse"];
    const expectedOutput = ["hello", "world"];
    const result = without(input, elementsToRemove);
    assert.deepEqual(result, expectedOutput);
  });
  
  it('should not modify original array', ()=>{
    const input = ["hello", "world", "lighthouse"];
    const elementsToRemove = ["lighthouse"];
    const expectedOutput = ["hello", "world", "lighthouse"];
    without(input, elementsToRemove);
    assert.deepEqual(input, expectedOutput);
  });
  
});


// assertArraysEqual((without(, ["b"])), );
// assertArraysEqual((without(["a", "b", "c", "d"], [])), );
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);