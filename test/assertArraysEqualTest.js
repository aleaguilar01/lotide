const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(["a", "b", "c"], ["a", "b", "c"]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([], []);
assertArraysEqual([1.3, 0.5], [2, 0.5]);
assertArraysEqual([0.5], [0.5, 2]);

