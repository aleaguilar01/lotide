const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉🎉✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😓🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = (dictionary,searchValue) => {
  for (let key in dictionary) {
    if (dictionary[key] === searchValue) return key;
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const booksByGenre = {
  romance: "Love and other Words",
  romantasy: "A court of thornes and roses",
  fantasy: "Lord of the rings",
  classics: "Pride and Prejudice"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(booksByGenre, "Lord of the rings"), "fantasy");
assertEqual(findKeyByValue(booksByGenre, "Love and other Words"), "romance");
assertEqual(findKeyByValue(booksByGenre, "Game of thrones"), undefined);

