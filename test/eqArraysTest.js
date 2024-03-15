const chai = require("chai");
const assert = chai.assert;
const eqArrays = require("../eqArrays");

describe("Testing eqArrays", () => {

  it("should return true if the two arrays with strings are equal", () => {
    const arr1 = ["a", "b", "c"];
    const arr2 = ["a", "b", "c"];
    assert.isTrue(eqArrays(arr1 , arr2));
  });

  it("should return false if the two arrays with strings are different", () => {
    const arr1 = ["a", "j", "c"];
    const arr2 = ["a", "b", "c"];
    assert.isFalse(eqArrays(arr1 , arr2));
  });

  it("should return true if the two arrays with numbers are equal", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    assert.isTrue(eqArrays(arr1 , arr2));
  });

  it("should return false if the two arrays with numbers are equal", () => {
    const arr1 = [1, 4, 3];
    const arr2 = [1, 2, 3];
    assert.isFalse(eqArrays(arr1 , arr2));
  });

  it("should return true if the two arrays are empty", () => {
    const arr1 = [];
    const arr2 = [];
    assert.isTrue(eqArrays(arr1 , arr2));
  });

  it("should return true if the two arrays with nested arrays are equal", () => {
    const arr1 = [1, [2, 3], 4, [5, [6, [7, [8]]]]];
    const arr2 = [1, [2, 3], 4, [5, [6, [7, [8]]]]];
    assert.isTrue(eqArrays(arr1 , arr2));
  });
});
