const assert = require('chai').assert;
const head = require('../head');

describe("Testing head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it('returns 5 for [5,6,7]', ()=>{
    assert.strictEqual(head([5,6,7]), 5);
  });

  it('returns "Hello" for ["Hello", "Lighthouse", "Labs"]', ()=>{
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  
  it('returns 14.13 for [14.13,23.23,32.32]', ()=>{
    assert.strictEqual(head([14.13,23.23,32.32]), 14.13);
  });

  it('returns "a" for ["a", "b", "c"]', ()=>{
    assert.strictEqual(head(["a", "b", "c"]), "a");
  });

  it('returns undefined for an empty array', ()=>{
    assert.strictEqual(head([]), undefined);
  });

});
  
