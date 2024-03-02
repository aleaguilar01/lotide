const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉🎉✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😓🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (sentence) => {
  const results = {};
  for (let letter of sentence) {
    if (letter !== " ") results[letter] = (results[letter] || 0) + 1;
  }
  return results;
};

const finalResults = countLetters("aaa bbb ccc");
const finalResults2 = countLetters("maria");

console.log(finalResults);

assertEqual(finalResults.a, 3);
assertEqual(finalResults.b, 3);
assertEqual(finalResults.c, 3);
assertEqual(finalResults2.m, 1);
assertEqual(finalResults2.a, 2);
assertEqual(finalResults2.r, 1);
assertEqual(finalResults2.i, 1);


