const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉🎉✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😓🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let x in array1) {
    if (Array.isArray(array1[x])) {
      if (!Array.isArray(array2[x])) return false;
      if (!eqArrays(array1[x], array2[x])) return false;
      continue;
    }
    if (array1[x] !== array2[x]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;


