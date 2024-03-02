const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉🎉✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😓🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  for (let key in object1) {
    if (Object.keys(object1).length !== Object.keys(object2).length) return false;
    if (!Object.prototype.hasOwnProperty.call(object2, key)) return false;
    if (Array.isArray(object1[key])) {
      if (object1[key].length !== object2[key].length) {
        return false;
      }
      for (let x in object1[key]) {
        if (object1[key][x] !== object2[key][x]) {
          return false;
        }
      }
      return true;
    }
    if (object1[key] !== object2[key]) return false;
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
const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

assertEqual((eqObjects(shirtObject , anotherShirtObject)),true);
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false
assertEqual(eqObjects(shirtObject , shirtObject2), false); // => false
assertEqual(eqObjects(shirtObject2 , shirtObject), false); // => false
assertEqual(eqObjects(testObject1, testObject2), true); // => true
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false