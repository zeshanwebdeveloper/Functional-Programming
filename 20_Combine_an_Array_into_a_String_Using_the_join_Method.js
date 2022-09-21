/*
And 'join()' is the another one JavaScript built in method which is used to join the array elements using any delimiter.

Task:
Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string. For example, I-like-Star-Wars would be converted to I like Star Wars. For this challenge, do not use the replace method.

function sentensify(str) {
  // Only change code below this line

  // Only change code above this line
}

console.log(sentensify("May-the-force-be-with-you"));

*/

function sentensify(str) {
    // Only change code below this line
    return str.split(/\W/).join(" ");
  
    // Only change code above this line
  }
  
  console.log(sentensify("May-the-force-be-with-you"));