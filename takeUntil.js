const takeUntil = (arr, callback) => {
  const results = [];
  for (const item of arr) {
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
  return results;
};

module.exports = takeUntil;
