const eqArrays = function(array1, array2) {
  let test = true;
  if (array1.length !== array2.length) {
    test = false;
    return test;
  }
  for (let x in array1) {
    if (array1[x] !== array2[x]) {
      return test = false;
    }
  }
  return test;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (let key in object1) {
    if (!Object.prototype.hasOwnProperty.call(object2, key)) return false;
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) return false;
    } else {
      if (object1[key] !== object2[key]) return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`🎉🎉✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`😓🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

const shirtObject = { color: "red", size: "medium" };
const shirtObject2 = { color: "blue", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const testObject1 = { myBool: false};
const testObject2 = { myBool: false};
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

assertObjectsEqual(shirtObject, anotherShirtObject);
assertObjectsEqual(shirtObject, longSleeveShirtObject); // => false
assertObjectsEqual(shirtObject, shirtObject2); // => false
assertObjectsEqual(shirtObject2, shirtObject); // => false
assertObjectsEqual(testObject1, testObject2); // => true
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject); // => true
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false