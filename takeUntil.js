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

const takeUntil = (arr, callback) => {
  const results = [];
  for (const item of arr) {
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const data3 = [2, 4, 6, 8, 10, 11, 13, 15, 17];


assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);
assertArraysEqual(takeUntil(data3, x => x % 2 !== 0), [2, 4, 6, 8, 10]);
