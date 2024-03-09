const chai = require("chai");
const assert = chai.assert;
const eqObjects = require("../eqObjects");

describe("Testing eqObject", () => {

  const shirtObject = { color: "red", size: "medium" };
  it("should return true if comparing two objects with the same keys and values in different order", () => {
    const anotherShirtObject = { size: "medium", color: "red" };
    assert.equal((eqObjects(shirtObject , anotherShirtObject)),true);

  });

  it("should return false if comparing two objects with different amount of keys", () => {
    const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
    assert.equal((eqObjects(shirtObject , longSleeveShirtObject)), false);

  });
  
  it("should return false if comparing two objects with the same keys but different values", () => {
    const shirtObject2 = { color: "blue", size: "medium" };
    assert.equal((eqObjects(shirtObject , shirtObject2)), false);

  });

  it("should return true if comparing two objects with the same keys and same boolean values", () => {
    const testObject1 = { myBool: false};
    const testObject2 = { myBool: false};
    assert.equal((eqObjects(testObject1 , testObject2)), true);

  });

  it("should return true if comparing two objects with the same keys and same array values", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
    assert.equal((eqObjects(multiColorShirtObject , anotherMultiColorShirtObject)), true);

  });

  it("should false if comparing two objects with the same keys and different array values", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
    assert.equal((eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject)), false);

  });


  it("should true if comparing two objects with the same keys and same object values", () => {
    const multiColorShirtObject = {colors: {color1: "blue", color2: "red"}, size: {size1: "small", size2: "medium", size3: "large"} };
    const longSleeveMultiColorShirtObject = {colors: {color1: "blue", color2: "red"}, size: {size1: "small", size2: "medium", size3: "large"}};
    assert.equal((eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject)), true);

  });

  it("should false if comparing two objects with the same keys and different object values", () => {
    const multiColorShirtObject = {colors: {color1: "blue", color2: "red"}, size: {size1: "small", size2: "medium", size3: "large"} };
    const longSleeveMultiColorShirtObject = {colors: {color1: "green", color2: "yellow"}, size: {size1: "small", size2: "medium", size3: "large"}};
    assert.equal((eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject)), false);

  });

  it("should false if comparing two objects with the same keys and different depth and types of values inside", () => {
    const multiColorShirtObject = {colors: {color: {color1: "blue", color2: {color21: "soft red", color22: "pink"}}, color2: "red"}, size: {size1: ["xxs", "xs", "s"], size2: "medium", size3: {large: {xl: "extra_large", xxl: "extra extra large"}}} };
    const longSleeveMultiColorShirtObject = {colors: {color: {color1: "blue", color2: {color21: "soft red", color22: "pink"}}, color2: "red"}, size: {size1: ["xxs", "xs", "s"], size2: "medium", size3: {large: {xl: "extra_large", xxl: "extra extra large"}}} };
    assert.equal((eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject)), true);

  });
});