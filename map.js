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


const map = (arr, callback) => {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};

const names = ["Alex", "John", "Rita", "Jessie", "Claudia"];
const nums = [1, 2, 3, 4, 5];
const boolArray = [true, true, false, false];

assertArraysEqual(map(names, name => name[0]), ["A", "J", "R", "J", "C"]);
assertArraysEqual(map(nums, n => n + 2), [3, 4, 5, 6, 7]);
assertArraysEqual(map(boolArray, b => {
  if (b) {
    return 1;
  } else {
    return 2;
  }
}), [1, 1, 2, 2]);


