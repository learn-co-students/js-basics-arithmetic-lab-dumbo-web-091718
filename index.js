/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!

const newID = 1000000000 + oldID

var ageIsValid

if (Number.isInteger(currentAge)) {
  ageIsValid = true;
} else {
  ageIsValid = false;
}

let randomNumber = Math.floor(Math.random()*20);

var randomInteger = Math.floor(randomNumber);

let randomUserID = 1000000000 + Math.floor(Math.random()*20)+1;
