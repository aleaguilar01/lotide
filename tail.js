const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉🎉✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😓🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(list) {
  const newList = list.slice(1);
  return newList;
};

const result = tail([1, 2, 3, 4]);
assertEqual(result.length, 3);
assertEqual(result[0], 2);
assertEqual(result[1], 3);
assertEqual(result[2], 4);

const result2 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result2.length, 2);
assertEqual(result2[0], "Lighthouse");
assertEqual(result2[1], "Labs");
