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

module.exports = letterPositions;
