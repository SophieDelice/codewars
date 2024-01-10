

// Beginner - Lost Without a Map
// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]
function maps(x){
  let result = []; 
  for ( let i=0; i<x.length; i++){
    result.push(x[i] *2); 
  }
  return result 
}

// Powers of 2
// Complete the function that takes a non-negative integer n as input, and returns a list of all the 
// powers of 2 with the exponent ranging from 0 to n ( inclusive ).

function powersOfTwo(n){
  const result = [];
  for ( let i= 0; i<=n; i++ ){
    result.push(Math.pow(2,i))
  }
  return result;
}


// Super Duper Easy
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x){
  //your code here
 if (typeof(x) === "string") return "Error"
  else return (x*50) + 6;

}

// Total amount of points
// Our football team has finished the championship.
// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", 
// where x is our team's score and y is our opponents score.
// For example: ["3:1", "2:2", "0:1", ...]
// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) 
// got in the championship by the rules given above.
// Notes:
// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
  let point = 0;
  for(let i =0; i<games.length; i++){
    const x = games[i].charAt(0);
    const y = games[i].charAt(2);
    
    if(x > y){
      point+=3;
    }
    else if(x === y){
      point+=1;
    }
    else{
      point+=0;
    }
   
  }
  return point;
}

// If you can't sleep, just count sheep!!
// If you can't sleep, just count sheep!!
// Task:Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
// Input will always be valid, i.e. no negative integers.


var countSheep = function (num){
  let sheepCount = ''; 
  for (let i = 1; i <= num; i++) {
    sheepCount += i.toString() + ' sheep...'
  }
  return sheepCount; 
}

// Printer Errors
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, 
// for the sake of simplicity, are named with letters from a to m.The colors used by the printer are recorded in a control string. 
// For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, 
// four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced 
// e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing 
// a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction 
// to a simpler expression.
// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"


function printerError(s) {
  // your code
let errorCount = 0; 
for (let i =0; i< s.length; i++) {
  if ( s[i] < "a" || s[i ] > "m") {
    errorCount++; 
  }
}
return errorCount + "/" + s.length; 
}


// Return Negative
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
  // Code?
  return -Math.abs(num);
}

// Reverse List Order
// In this kata you will create a function that takes in a list and returns a list with the reverse order.
// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

function reverseList(list) {
  return list.reverse("");

}

// Drink about
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

function peopleWithAgeDrink(old) {
  if (old < 14 ) return "drink toddy"; 
  if (old < 18 ) return "drink coke";
  if (old < 21 ) return "drink beer"; 
  return "drink whisky";
};

console.log(peopleWithAgeDrink(10));
console.log(peopleWithAgeDrink(17));



// Keep up the hoop
// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount (n) {
  //your code goes here    
 if ( n >=10 ) return "Great, now move on to tricks";
  return "Keep at it until you get it"
}

// String ends with?
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
  // TODO: complete
  return str.endsWith(ending);
}

// Exclamation marks series #1: Remove an exclamation mark from the end of string
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, 
// no need to verify it.
// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"


function remove (string) {
  //coding and coding....
  if (string[string.length-1] === "!") {
    return string.slice(0,-1);
  } else {
    return string 
  }
}


// Grasshopper - Personalized Message
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// Use conditionals to return the proper message:
// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'


function greet (name, owner) {
  // Add code here
  if( name === owner ) return "Hello boss";
  else return "Hello guest"
}

// Calculate Average 
// Write a function which calculates the average of the numbers in a given list.
function findAverage(array) {
  // your code here
  if (array.length === 0) {
    return 0; 
  }
  let sum = 0; 
  for(let i=0; i<array.length; i++){
    sum +=array[i]; 
  }
  return sum / array.length;
  
}

console.log(findAverage([1,5,6])); 
console.log(findAverage([])); 

// Make a function that does arithmetic!
// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator 
// used on them.a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
// The four operators are "add", "subtract", "divide", "multiply".

function arithmetic(a, b, operator){
  //your code here!
//   let operator = '';
  if(operator == "add") return a+b;
  if(operator == "subtract" ) return a-b;
  if(operator == "multiply" ) return a*b;
  if(operator == "divide" ) return a/b;
}

console.log(arithmetic(5, 5, "add"));
console.log(arithmetic(5, 5, "subtract"));
console.log(arithmetic(5, 5, "multiply"));
console.log(arithmetic(5, 5, "divide"));

// Grasshopper - Grade book
// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated 
// with that grade.
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.


function getGrade (s1, s2, s3) {
  // Code here
  let result = (s1 + s2+ s3) / 3; 
  
  if ( result >= 90 && result <=100 ) return "A"; 
  if (result >= 80 && result < 90) return "B";
  if (result >= 70 && result < 80) return "C"; 
  if (result >= 60 && result <70) return "D"; 
  if (result >=0 && result <60) return "F";
}

console.log(getGrade (70,85 ,80 ));
console.log(getGrade (79,87 ,80 ));



// String repeat
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr (n, s) {
  let newS = '';
  for ( let i= 1; i<=n; i++){
    newS +=s ;
  }
  return newS; 
}

// Beginner Series #3 Sum of Numbers
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it.
//  If the two numbers are equal return a or b. Note: a and b are not ordered!

function getSum(a, b) {
  let sum = 0;
   const start = Math.min(a, b);
   const end = Math.max(a, b);
 
   for (let i = start; i <= end; i++) {
     sum += i;
   }
 
   return sum;
 }
// Student's Final Grade
// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
// This function should return a number (final grade). There are four types of final grades:
// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

function finalGrade (exam, projects) {
   
  if ( exam > 90 || projects > 10 ){
    return 100;
  } else if ( exam > 75 &&  projects >= 5 ){
    return 90;
  } else if ( exam > 50 && projects >= 2){
    return 75;
  } else {
     return 0; 
  }
}

// Filter out the geese
// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
// The geese are any strings in the following array, which is pre-populated in your solution:["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  newList = birds.filter( item => !geese.includes(item))
  return newList
};


// Sort array by string length
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
// For example, if this array were passed as an argument: ["Telescopes", "Glasses", "Eyes", "Monocles"]
// Your function would return the following array: ["Eyes", "Glasses", "Monocles", "Telescopes"]
// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

function sortByLength (array) {
  return array.sort((a,b) => a.length - b.length);
}

// What is between?
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
function between(a, b) {
  // your code here
  let result = [] ; 

  for( let i= a; i<= b; i++ ){
    result.push(i); 
  }
  return result; 
}

// Unique In Order
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with 
// the same value next to each other and preserving the original order of elements.

var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  if (iterable.length === 0) {
    return [];
  }

  let unique = [iterable[0]];

  for (let i = 1; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i - 1]) {
      unique.push(iterable[i]);
    }
  }

  return unique;
}

// You're a square!
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square 
// building blocks!
// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! 
// If you just had a way to know, whether you're currently working in vain… Wait! 
// That's it! You just have to check if your number of building blocks is a perfect square.


var isSquare = function(n){
  return Math.sqrt(n) % 1 === 0;
  ; // fix me
}

// Count characters in your string
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  // TODO
  let countLetters = {};
  
  for ( let char of string) {
    if (countLetters[char]) {
      countLetters[char]++;
    } else {
      countLetters[char] = 1;
    }
  }
  return countLetters;

  
}

// Convert a Number to a String!
// We need a function that can transform a number (integer) into a string.
function numberToString(num) {
  // Return a string of the number here!
  return num.toString()
}

// Find the first non-consecutive number
// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null2.
// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. 
// The numbers could be positive or negative and the first non-consecutive could be either too!
// If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges
// Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, 
//   but you can write your own example test. )


function firstNonConsecutive (arr) {
  let findNonC = 0; 
   for ( let i= 1; i<arr.length; i++) {
     if ( arr[i] - arr[i-1] != 1) return arr[i];
   }
   return null;
 
 }

// Convert a string to an array
// Write a function to split a string and convert it into an array of words.

function stringToArray(string){
  return string.split(' ')

}

// Simple multiplication
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  // your code........
if (number % 2 === 0) return number * 8; 
return number * 9; 
}

// Area or Perimeter
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
// Example(Input1, Input2 --> Output):
// 6, 10 --> 32
// 3, 3 --> 9


const areaOrPerimeter = function(l , w) {
  // Return your answer
  if ( l===w) return l*w; 
  return 2*l + 2*w;
};


// Correct the mistakes of the character recognition software
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.


function correct(string) {
	// your code here
  let correctChar = ''; 
  for (const char of string){
    if (char ==='5'){
         correctChar += 'S'
    } else if (char === '0'){
      correctChar += 'O'
    } else if ( char === '1'){
      correctChar += 'I'
    } else {
      correctChar += char; 
    }

  }
   return correctChar;
}

const string = "Dog5 ; 1gloo";
console.log(correct(string));


// Grasshopper - Check for factor
// This function should test if the factor is a factor of base. Return true if it is a factor or false if it is not.
// About factors : Factors are numbers you can multiply together to get another number. 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder. For example 2 is not a factor of 7 because: 7 % 2 = 1
// Note: base is a non-negative number, factor is a positive number.


function checkForFactor (base, factor) {
  // code here
  if ( base % factor === 0) return true
  else return false
}


let base = 5;
let factor = 10;
console.log (checkForFactor (base, factor))


// Is it even?
// In this Kata we are passing a number (n) into a function. Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false. Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.

function testEven(n) {
  //Your awesome code here!
return n % 2 === 0
}

// Keep Hydrated
// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

function litres(time) {
  total =  ( 0.5 * time); 
   return Math.floor(total); 
 
 }
 
 console.log(litres(6.7))
 console.log(litres(3))

// Convert a String to a Number!
// We need a function that can transform a string into a number. What ways of achieving this do you know?
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

const stringToNumber = function(str){
  // put your code here
  return Math.floor(str); 
  return null;
}

// The highest profit wins!
// Story - Ben has a very simple idea to make some profit: he buys something and sells it again. Of course,
//   this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, 
//  he's going to buy it for the lowest possible price and sell it at the highest.
// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)]; // fix me!
}
arr = [ 2,9,7,24]
console.log(minMax(arr))


// Opposites Attract
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
  
  if (flower1 % 2 === 0 && flower2 % 2 === 1) return true
  if (flower1 % 2 === 1 && flower2 % 2 === 0 ) return true
  return false ;
}

console.log(lovefunc(10, 3) ); 
console.log(lovefunc(5, 3)); 


// Are You Playing Banjo?
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo! The function takes a name as its only argument, 
// and returns one of the following strings:

function areYouPlayingBanjo(name) {
  if (name[0] === "R" || name[0] === "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}
const name = "Rachel"
const names = "Jullain"
console.log(areYouPlayingBanjo(names));

// Disemvowel Trolls
// Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' 
// comments, neutralizing the threat. Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!". Note: for this kata y isn't considered a vowel.


function disemvowel(str) {
  const strNoVowels = str.replace(/[aeiou]/ig, '')
    return strNoVowels;
}

const str = "Happy"
console.log(disemvowel(str))


// Third Angle of a Triangle
// You are given two interior angles (in degrees) of a triangle. Write a function to return the 3rd.
// Note: only positive integers will be tested. https://en.wikipedia.org/wiki/Triangle

function otherAngle(a, b) {
  const sum = a + b;
  return thirdAngle = 180 - sum;
}
console.log(otherAngle(105,5))

// Sum The Strings
// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
// Notes: If either input is an empty string, consider it as zero. Inputs and the expected output will never exceed the signed 
// 32-bit integer limit (2^31 - 1)


function sumStr(a,b) {
  let NumOne = Number(a); 
  let NumTwo = Number(b); 
    let sum = NumOne + NumTwo;
    return sum.toString();
  }
  console.log(sumStr(20,5))


// Will you make it?
// You were camping with your friends far away from home, but when it's time to go back, 
// you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, 
// your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if
//  it is possible to get to the pump or not.
// Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  let currentMilage = mpg * fuelLeft; 
  if ( distanceToPump <= currentMilage) {
    return true;
    } else {
      return false;
    }
}


// Grasshopper - Messi goals function
// Messi is a soccer player with goals in three leagues: LaLiga , Copa del Rey , Champions
// Complete the function to return his total number of goals in all three leagues.

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals ;
}

// Quarter of the year
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