const without = function(orignalArray, itemsToRemove) {
  const finalArray = [];
  for (let item of orignalArray) {
    if (! itemsToRemove.includes(item)) {
      finalArray.push(item);
    }
  }
  return finalArray;
};

module.exports = without;
