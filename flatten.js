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

const flatten = function(array) {
  const flatArray = [];
  for (let n of array) {
    if (Array.isArray(n)) {
      for (let x of n) {
        flatArray.push(x);
      }
    } else {
      flatArray.push(n);
    }
  }
  return flatArray;
};

assertArraysEqual(flatten([1,2,3,[4,5]]), [1,2,3,4,5]);
assertArraysEqual(flatten(["a", "b", ["c", "d"]]), ["a", "b", "c", "d"]);
assertArraysEqual(flatten([8, 10, ["c", "d"]]), [8, 10, "c", "d"]);
