const assertArraysEqual = function(array1, array2) {
  let test = true;
  if (array1.length !== array2.length) {
    console.log(`😓🛑 Assertion Failed: ${array1} !== ${array2}`);
    return;
  }
  for (let x in array1) {
    if (array1[x] !== array2[x]) {
      console.log(`😓🛑 Assertion Failed: ${array1} !== ${array2}`);
      return;
    }
  }
  console.log(`🎉🎉✅ Assertion Passed: ${array1} === ${array2}`);
  return;
};

assertArraysEqual(["a", "b", "c"], ["a", "b", "c"]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([], []);
assertArraysEqual([1.3, 0.5], [2, 0.5]);
assertArraysEqual([0.5], [0.5, 2]);
