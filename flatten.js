const flatten = function(array) {
  const flatArray = [];
  for (let n of array) {
    if (Array.isArray(n)) {
      for (let x of n) {
        flatArray.push(x);
      }
    } else {
      flatArray.push(n);
    }
  }
  return flatArray;
};

module.exports = flatten;
