const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉🎉✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😓🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let x in array1) {
    if (array1[x] !== array2[x]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (let key in object1) {
    if (!Object.prototype.hasOwnProperty.call(object2, key)) return false;
    if (Array.isArray(object1[key])) {
      eqArrays(object1[key], object2[key]);
    } else {
      if (object1[key] !== object2[key]) return false;
    }
    
  }
  return true;
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

assertEqual((eqObjects(shirtObject , anotherShirtObject)),true);
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false
assertEqual(eqObjects(shirtObject , shirtObject2), false); // => false
assertEqual(eqObjects(shirtObject2 , shirtObject), false); // => false
assertEqual(eqObjects(testObject1, testObject2), true); // => true
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false