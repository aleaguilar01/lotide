const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (let key in object1) {
    if (object1[key].constructor === Object) {
      if (object2[key].constructor !== Object) {
        return false;
      } else {
        if (!eqObjects(object1[key], object2[key])) return false;
        continue;
      }
    }
    if (!Object.prototype.hasOwnProperty.call(object2, key)) return false;
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) return false;
    } else {
      if (object1[key] !== object2[key]) return false;
    }
  }
  return true;
};

module.exports = eqObjects;
