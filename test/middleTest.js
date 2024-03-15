const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual((middle([1,2,3,4,5])), [3]);
assertArraysEqual((middle([1])), []);
assertArraysEqual((middle([1,2])), []);
assertArraysEqual((middle([1,2,3,4,5,6,7,8,9,10])), [5,6]);
assertArraysEqual((middle([])), []);
assertArraysEqual((middle(["a", "e", "i"])), ["e"]);
assertArraysEqual((middle(["a", "e", "i", "o"])), ["e", "i"]);