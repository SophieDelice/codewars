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