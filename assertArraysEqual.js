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

const assertArraysEqual = function(eqArrays) {
  if (eqArrays) {
    console.log(`🎉🎉✅ Assertion Passed`);
    return;
  }
  console.log(`😓🛑 Assertion Failed`);
  return;
};
assertArraysEqual(eqArrays(["a", "b", "c"], ["a", "b", "c"]));
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));
assertArraysEqual(eqArrays([], []));
assertArraysEqual(eqArrays([1.3, 0.5], [2, 0.5]));
assertArraysEqual(eqArrays([0.5], [0.5, 2]));

