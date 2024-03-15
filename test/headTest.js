const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([14.13,23.23,32.32]), 14.13);
assertEqual(head(["a", "b", "c"]), "a");
assertEqual(head([]), undefined);