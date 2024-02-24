const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉🎉✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😓🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let test = true;
  if (array1.length !== array2.length) {
    test = false;
  }
  for (let x in array1) {
    if (array1[x] !== array2[x]) {
      test = false;
    }
  }
  return test;
};

assertEqual(eqArrays(["a", "b", "c"], ["a", "b", "c"]), true);
assertEqual(eqArrays(["a", "j", "c"], ["a", "b", "c"]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1.3, 0.5], [1.3, 0.5]), true);
assertEqual(eqArrays([1.3, 0.5], [2, 0.5]), false);
assertEqual(eqArrays([0.5], [0.5, 2]), false);

