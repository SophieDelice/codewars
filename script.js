// Printer Error
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, 
// are named with letters from a to m.The colors used by the printer are recorded in a control string. 
// For example a "good" control string would be 


// Counting Sheep...
// Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(sheep) {
    // TODO
  return sheep.filter(sheep => !! sheep).length;
  }
  
  const sheeps = [true, true, false, true, false, true, false , false , true];
  console.log(countSheeps(sheeps)); // Output will be the count of present sheep (e.g., 4)


// List Filtering
// In this kata you will create a function that takes a list of non-negative integers
// and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    return l.filter(item => typeof item === "number" && item >= 0);
  }
const myList = [ 1, 2, "a" , "W" ]; 
console.log(filter_list(myList));

// Vowel Count
// Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y)
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    // Initialize count to keep track of vowels
    let count = 0;
    
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      // Check if the character is a vowel (a, e, i, o, u)
      if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
        // If it's a vowel, increment the count
        count++;
      }
    }
    
    // Return the total count of vowels found in the string
    return count;
  }

//Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
    findSmallestInt = args => Math.min(...args)
}
// Write a function that takes an array of numbers and returns 
// the sum of the numbers. The numbers can be negative or non-integer. 
// If the array does not contain any numbers then you should return 0.

function sum (numbers) {
    "use strict";

if ( numbers.length === 0 ) return 0; 
return numbers.reduce((total, currentValue) => total + currentValue);

};
// Create a function that takes an integer as an argument and returns 
// "Even" for even numbers or "Odd" for odd numbers

function evenOrOdd(number) {
    if (number % 2) {
        return "Odd" 
} else {
    return "Even"
 }

}

// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - 
// operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
function basicOp(operation, value1, value2)
{
    if (operation === "+"){
        return value1 + value2;
    }

    if (operation === "-"){
        return value1 - value2;
    }
    
    if (operation === "*"){
        return value1 * value2;
    }

    if (operation === "/"){
        return value1 / value2;
    }
}
console.log(basicOp("+ 5,5"));

//  Write a function named setAlarm/set_alarm/set-alarm/setalarm 
// (depending on language) which receives two parameters. 
// The first parameter, employed,is true whenever you are employed and the second parameter,
//  vacation is true whenever you are on vacation.

function setAlarm(employed, vacation) {
    if (employed && ! vacation ) return true; 
  return false;
}
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
// You can ignore any need to sanitize words or add punctuation, 
// but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
function smash(words) {
    function smash (words) {
        return words.join(" ")
     };
}
// Write a function which converts the input string to uppercase.
function makeUpperCase(str) {
    return str.toUpperCase();
  }

// Make a simple function called greet that returns the most-famous "hello world!".
function greet(){
    return "hello world !";
}