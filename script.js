


// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; 
// and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
  let result = 0;
  if ( month <= 3 ) {
    return 1; 
  } else if (month <= 6 ) {
    return 2; 
  } else if ( month <=9) {
    return 3; 
  } else {
      return 4; 
  }
   }
  console.log(quarterOf(2)); // Output: 1 (for February)
console.log(quarterOf(7)); // Output: 3 (for July)
console.log(quarterOf(11)); // Output: 4 (for November)



// How good are you really?
// There was a test in your class and you passed it. Congratulations!But you're an ambitious person. 
// You want to know if you're better than the average student in your class.You receive an array with your peers' test scores. 
// Now calculate the average and compare your score! Return True if you're better, else False!
// Note:
// Your points are not included in the array of your class's points. 
// For calculating the average point you may add your point to the given array!


function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let result = 0; 
  for( let i= 0; i<classPoints.length; i++) {
    result += classPoints[i] ; 
  }
  let average = (result + yourPoints) / (classPoints.length + 1); 

//   return yourPoints > average; 
  
if (yourPoints > average) {
  return (true);
} else {
  return (false);
}
  
}
// Example usage:
const yourPoints = 85;
const classPoints = [70, 65, 80, 90]; // Sample class scores
const betterThanAverages = betterThanAverage(yourPoints, classPoints);
console.log(betterThanAverages); // This will output True or False based on the comparison



// All Star Code Challenge #18
// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences 
// the 2nd argument is found in the first one. If no occurrences can be found, a count of 0 should be returned.
function strCount(str, letter){  
  let result = 0; 
  for ( let i = 0; i< str.length; i++ ) {
    if (str[i] == letter) {
      result++
    }

  }
  return result
}

// Parse nice int from char problem
// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
// Write a program that returns the girl's age (0-9) as an integer.
// Assume the test input string is always a valid string. For example, the test input may
// be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString){
  return parseInt(inputString[0])
// return the girl's correct age as an integer. Happy coding :) 
}


// Abbreviate a Two Word Name
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

function abbrevName(name){
  let [ first , last] = name.split(' '); 
  return first [0].toUpperCase() + '.' + last[0].toUpperCase(); 

    // code away

}

// Double Char
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str[i] + str[i];
  }
  return result;
}

// Example usage:
const inputString = 'food';
 const doubledString = doubleChar(inputString);
console.log(doubleChar(inputString));


//  Opposite number 
// Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number) {
  //your code here
  return -number;
}
console.log(opposite(35));
console.log(opposite(-10)); 

// Friend or Foe?
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

function friend(friends){
  return friends.filter( names => names.length === 4)
  
}

const namesArray = ["Ryan", "Kieran", "Jason", "Lora",];
console.log(friend(namesArray));


// Odd or Even 
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
  //enter code here
 let sum = 0;

 // Calculate the sum of all elements in the array using a for loop
 for (let i = 0; i < array.length; i++) {
   sum += array[i];
 }

 // Check if the sum is odd or even and return the result as a string
return sum % 2 === 0 ? 'even' : 'odd';
}

console.log(oddOrEven([2, 4, 6]));
console.log(oddOrEven([1, 3, 5]));


// Calculate BMI
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
  const bmiTotal = weight / (height **2 ); 
  if ( bmiTotal <= 18.5) return "Underweight";
  if (bmiTotal<= 25.0 ) return "Normal"; 
  if (bmiTotal<= 30.0) return "Overweight"; 
  if (bmiTotal > 30 ) return "Obese";
  
}

console.log(bmi( 375, 5.8));


// Convert boolean values to strings 'Yes' or 'No'.
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool) {
    if (bool) return "Yes"; 
    return " No";
}
console.log(boolToWord("false"));
console.log(boolToWord("true"));


// Remove String Spaces
//  Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x) {
    return x.replace(/ /g, '')
}

const sentenceWithspace = "This is a string with spaces";
console.log(noSpace(sentenceWithspace));

// Remove exclamation marks
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeEclamationMarks(s) {
    return s.replace( /!/g, "");
    
}

const sentence = "Practice ! coding daily !!!";
console.log(removeEclamationMarks(sentence))

// Beginner - Reduce but Grow
// Given a non-empty array of integers, return the result of multiplying the values together in order. 

function grow(x) {
    let result = 1
    for (let i =0; i < x.length; i++) {
        result *= x[i]

    }

    return result
   
}

const array = [2,4,8]
console.log(grow(array));

// Reversed sequence
// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    let results = [];
    for (let i = n; i>0; i--) {
      results.push(i)
    }
    return results;
  };

// Convert a Boolean to a String
// Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.

function booleanToString(b){
    //your code here
    return b.toString();
  }

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