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

const middle = function(array) {
  let middle = [];
  if (array.length <= 2) {
    return middle;
  } else {
    if (array.length % 2 === 0) {
      middle.push(array[array.length / 2 - 1]);
      middle.push(array[array.length / 2]);
    } else {
      middle.push(array[Math.floor(array.length / 2)]);
    }
  }
  return middle;
};

assertArraysEqual((middle([1,2,3,4,5])), [3]);
assertArraysEqual((middle([1])), []);
assertArraysEqual((middle([1,2])), []);
assertArraysEqual((middle([1,2,3,4,5,6,7,8,9,10])), [5,6]);
assertArraysEqual((middle([])), []);
assertArraysEqual((middle(["a", "e", "i"])), ["e"]);
assertArraysEqual((middle(["a", "e", "i", "o"])), ["e", "i"]);
