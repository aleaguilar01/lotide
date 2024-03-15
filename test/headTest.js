const assert = require('chai').assert;
const head = require('../head');

describe("Testing head", () => {
  it("returns as number the first element of an array of numbers", () => {
    const headElement = head([1, 2 , 3]);
    assert.strictEqual(headElement, 1);
    assert.typeOf(headElement, 'number');
  });

  it("returns as string the first number of an array of numbers as strings", () => {
    const headElement = head(['5']);
    assert.strictEqual(headElement, '5');
    assert.typeOf(headElement, 'string');
  });

  it('returns the first element of a mixed array', ()=>{
    const headElement = head([5, '6', true, 5.12]);
    assert.strictEqual(headElement, 5);
    assert.typeOf(headElement, 'number');
  });

  it('returns the first string element from an array of strings', ()=>{
    const headElement = head(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(headElement, "Hello");
    assert.typeOf(headElement, 'string');
  });
  
  it('returns the first element as number from an array of float numbers', ()=>{
    const headElement = head([14.13,23.23,32.32]);
    assert.strictEqual(headElement, 14.13);
    assert.typeOf(headElement, 'number');
  });

  it('returns as string the first element of an array of characters', ()=>{
    assert.strictEqual(head(["a", "b", "c"]), "a");
  });

  it('returns undefined for an empty array', ()=>{
    assert.strictEqual(head([]), undefined);
  });

});
  
