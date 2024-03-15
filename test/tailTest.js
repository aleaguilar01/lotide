
const tail = require('../tail');
const assertEqual = require('../assertEqual');

const result = tail([1, 2, 3, 4]);
assertEqual(result.length, 3);
assertEqual(result[0], 2);
assertEqual(result[1], 3);
assertEqual(result[2], 4);

const result2 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result2.length, 2);
assertEqual(result2[0], "Lighthouse");
assertEqual(result2[1], "Labs");

const result3 = tail(["onlyElement"]);
assertEqual(result3.length, 0);

const result4 = tail([]);
assertEqual(result4.length, 0);