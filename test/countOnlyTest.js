const countOnly = require('../countOnly');
const assert = require('chai').assert;


const items = [ "Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe" ];
  
describe('Testing Count Only', ()=>{
   
  it('should count all occurrences if all object items are set to true', ()=>{
    const itemsToCount =  { "Jason": true, "Fang": true };
    const result = countOnly(items, itemsToCount);
    const expectedOutput = { "Jason": 1, "Fang": 2 };
    assert.deepEqual(result, expectedOutput);
  });

  it('should return only the count of the object items set to true', ()=>{
    const itemsToCount =  { "Jason": true, "Fang": false };
    const result = countOnly(items, itemsToCount);
    const expectedOutput = { "Jason": 1 };
    assert.deepEqual(result, expectedOutput);
  });

  it('should return an empty object if the key is not found in the list', ()=>{
    const itemsToCount =  { "Ale": true };
    const result = countOnly(items, itemsToCount);
    const expectedOutput = {  };
    assert.deepEqual(result, expectedOutput);
  });

  it('should return an empty object if the object to search for is empty', () => {
    const result = countOnly(items, {});
    const expectedOutput = {};
    assert.deepEqual(result, expectedOutput);
  });

  it('should return an empty object if the list is empty', () => {
    const itemsToCount = { "Jason": true, "Fang": true };
    const result = countOnly([], itemsToCount);
    const expectedOutput = {};
    assert.deepEqual(result, expectedOutput);
  });

  it('should return an empty object if all object items are set to false', () => {
    const itemsToCount = { "Jason": false, "Fang": false };
    const result = countOnly(items, itemsToCount);
    const expectedOutput = {};
    assert.deepEqual(result, expectedOutput);
  });
  
});