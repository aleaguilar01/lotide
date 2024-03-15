const countLetters = (sentence) => {
  const results = {};
  for (let letter of sentence) {
    if (letter !== " ") results[letter] = (results[letter] || 0) + 1;
  }
  return results;
};

module.exports = countLetters;
