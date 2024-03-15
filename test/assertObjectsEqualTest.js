const assertObjectsEqual = require('../assertObjectsEqual');

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