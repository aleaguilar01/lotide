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


const letterPositions = (sentence) => {
  const results = {};
  for (let i in sentence) {
    if (sentence[i] !== " ") {
      if (! results[sentence[i]]) results[sentence[i]] = [];
      results[sentence[i]].push(Number(i));
    }
  }
  return results;
};

const test = letterPositions("hello");
const test2 = letterPositions("hi there");


assertArraysEqual(test.h, [0]);
assertArraysEqual(test.e, [1]);

assertArraysEqual(test2.i, [1]);
assertArraysEqual(test2.t, [3]);
assertArraysEqual(test2.h, [0,4]);



