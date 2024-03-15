const findKeyByValue = (dictionary,searchValue) => {
  for (const key in dictionary) {
    if (dictionary[key] === searchValue) return key;
  }
};

module.exports = findKeyByValue;