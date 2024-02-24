const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let x in array1) {
    if (array1[x] !== array2[x]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`🎉🎉✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`😓🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const without = function(orignalArray, itemsToRemove) {
  let finalArray = [];
  for (let item of orignalArray) {
    if (! itemsToRemove.includes(item)) {
      finalArray.push(item);
    }
  }
  return finalArray;
};

assertArraysEqual((without([1,2,3,4,5], [2,4])), [1, 3, 5]);
assertArraysEqual((without(["a", "b", "c", "d"], ["b"])), ["a", "c", "d"]);
assertArraysEqual((without(["a", "b", "c", "d"], [])), ["a", "b", "c", "d"]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);