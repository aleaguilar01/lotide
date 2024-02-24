const eqArrays = function(array1, array2) {
  let test = true;
  if (array1.length !== array2.length) {
    test = false;
    return test;
  }
  for (let x in array1) {
    if (array1[x] !== array2[x]) {
      return test = false;
    }
  }
  return test;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`🎉🎉✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`😓🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};
assertArraysEqual(["a", "b", "c"], ["a", "b", "c"]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([], []);
assertArraysEqual([1.3, 0.5], [2, 0.5]);
assertArraysEqual([0.5], [0.5, 2]);

