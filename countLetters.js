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

console.log(countLetters("aaa bbb ccc"));