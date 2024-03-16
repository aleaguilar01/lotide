# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @aleaguilar01/lotide`

**Require it:**

`const _ = require('@aleaguilar01/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: Returns the first value of an array.
* `function2(tail)`: Returns an array without the head (first value).
* `function3(middle)`: Returns the middle values of an array, 2 if the array has an even amount of values.
* `function4(countLetters)`: Accepts a string and returns an object with the count of each letter in the string. 
* `function5(assertArraysEqual)`: Returns the first value of an array.
* `function6(assertEqual)`: Takes in an expected and actual value and outputs if the assertion pass or fails. 
* `function7(assertassertObjectsEqual)`: Takes in 2 objects and assessed if they are equal or not. Returns if the assertion pass or fails. 
* `function8(countOnly)`: Takes an array and items to count. If items in the array, returns how many times they appear in the array.
* `function9(eqArrays)`: Takes in 2 arrays compares them and returns true or false, depending if they are equal or not.
* `function10(eqObjectss)`: Takes in 2 objects compares them and returns true or false, depending if they are equal or not.
* `function11(findKey)`: Function allows you to search for a key in an object based on a condition specified by the callback function.
* `function12(findKeyByValue)`: Function that provides a way to find a key in an object based on a specified value.
* `function13(flatten)`: Function that takes a two dimentional array and return a one dimensional array.
* `function14(letterPositions)`: Function that taken an string and returns an object with arrays of the positions of each letter.
* `function15(takeUntil)`: Function that takes in an array and returns the values of the array until it founds the condition stablished. 
* `function16(without)`: Function that takes in an array and returns the values of the array until 
* `function16(map)`: Function that takes in an array and returns another array after passing a callback to each item. 

