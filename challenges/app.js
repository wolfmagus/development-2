//function isPalindrome(string){
    //Take a string as input
    //Create a reversed version of the string 

    //const reversedString = "word"
    // const splitString = string.split("")
    // const reversedSplitString = splitString.reverse()
    // const reversedString = reversedSplitString.join("")

//     const reversedString =string.split("").reverse().join("")
//     const finalResult = string === reversedString ? "This is a palindrome!" : "This is NOT a palindrome!"
    
//     return finalResult
    
// }

// console.log(isPalindrome("bird"))
// console.log(isPalindrome("racecar"))
// console.log(isPalindrome("cat"))
// console.log(isPalindrome("pop"))
// console.log(isPalindrome("level"))
// console.log(isPalindrome("hat"))
// console.log(isPalindrome("dad"))

// const readline = require("readline-sync")

// const playerName = readline.question("Hello, what is your name?")

// console.log(`Welcome ${playerName} to the RPG game!!!`)

// function Character(name, healthPoints, attackPoints, inventory){
//     this.name = name;
//     this.healthPoints = healthPoints;
//     this.attackPoints = attackPoints;
//     this.inventory = inventory;
// }

// let playerInventory = [
//     "bow",
//     "sword",
//     "nunchucks",
//     "rocket launcher"
// ];

// const hero = new Character(playerName, 100, 5, playerInventory) 
// const enemy1 = new Character("Tricky Tim", 25, 2, ["Tooth", "Bracelet"]);
// const enemy2 = new Character("Lulu", 36, 3, ["Sword", "Necklace"]);
// const enemy3 = new Character("Mickey", 18, 1, ["Ears"]);

// console.log(hero)

// function mystery(arr) {
//     var result = 0 
//     var str //
//     for (let i = 0; i < arr.length; i++){ //
//       str = arr[i] + result//
//     }
//     return str//
//   }
// let numArray2 = ["string1","string2"]
//   console.log(mystery(numArray2))

// const numbers = [1, 2, 3, 4, 5, 6];

// function filterEvenNumbers(numbers) {
//   return numbers.filter(num => num % 2 === 0);
//   }

// console.log(filterEvenNumbers(numbers))

// function filterEvenNumbers(numbers) {
//   return numbers.filter(num => num % 2 === 0);
//   }

  
// const evenNumbers = filterEvenNumbers(numbers);
// console.log(evenNumbers);  // Output: [2, 4, 6]
// const evenNumbers = filterEvenNumbers(numbers);
// console.log(evenNumbers);  // Output: [2, 4, 6]

//  function findVowels(word){
//     //make a variable to contain the count
//     let count = 0
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     //make for loop to check each character in word
//     //make if statement that checks for vowels
//     for (let i = 0; i < word.length; i++) {
//       // Make an if statement that checks for vowels
//       if (vowels.includes(word[i].toLowerCase())) {
//         count++;
//       }
//     }
//     return count
//     }
    
//     console.log(findVowels("Hello"))
//     console.log(findVowels("Death"))
//     console.log(findVowels("seven"))
//     console.log(findVowels("why"))
    
    // You can state the vowels challenge as follows:
    //  write a function that takes a string as argument - done
    //  and returns the number of vowels contained in that string.

  //   function palindrome(string) {
  //     const myString = string.split("");
  //     console.log(myString);
      
  //     const reversed = [...myString].reverse();  // Create a copy before reversing
  //     console.log(reversed);
      
  //     const reverseJoined = reversed.join('');
  //     console.log(reverseJoined);
      
  //     return reverseJoined === string;
  // }
  
  // palindrome('hello');

  // const palindrome = str => {
  //   // turn the string to lowercase
  //   str = str.toLowerCase()
  //   // reverse input string and return the result of the
  //   // comparisong
  //   return str === str.split('').reverse().join('')
  // }  

  // console.log(palindrome("hello"))
  // let finalResult = []
  // function specialCharacter(arr) {
  //   const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  
  //   const result = arr.map(word => {
  //     // Convert the word string to an array of characters
  //     const charArray = word.split("");
  
  //     // Check if every character in the array is in the alphabet
  //     return charArray.every(char => alphabet.includes(char));
  //   });
  //    if(result === false){
  //     finalResult.push()
  //    }
  //   return result;
  // }
  
  // console.log(specialCharacter(["taco", "h!t", "pizza", "cereal", "T@co"]));

//   let finalResult = [];

// function specialCharacter(arr) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

//   const result = arr.map(word => {
//     // Convert the word string to an array of characters
//     const charArray = word.split("");

//     // Check if every character in the array is in the alphabet
//     return charArray.every(char => alphabet.includes(char));
//   });

// CHALLENGE
//   // Iterate through the result array and push words with special characters to finalResult
//   result.forEach((isAlphabet, index) => {
//     if (!isAlphabet) {
//       finalResult.push(arr[index]);
//     }
//   });

//   return result;
// }

// console.log(specialCharacter(["taco", "h!t", "pizza", "cereal", "T@co"]));
// console.log(finalResult); // Output: ["h!t", "T@co"]


// CHALLENGE
// function generateMultiplicationTable(number) {
//   for (let i = 1; i <= 10; i++) {
//     let result = number * i;
//     console.log(`${number} * ${i} = ${result}`);
//   }
// }

// console.log(generateMultiplicationTable(7));
// console.log(generateMultiplicationTable(3));


//    CHALLENGE
// function createTable(rows, columns) {
//   const table = [];

//   for (let i = 0; i < rows; i++) {
//     const row = [];
//     for (let j = 0; j < columns; j++) {
//       row.push(i * j);
//     }
//     table.push(row);
//   }

//   return table;
// }
// const table1 = createTable(3, 4);
// console.log(table1);

// const table2 = createTable(5, 5);
// console.log(table2);
  
// CHALLENGE 1
//Create a function that will return an integer number corresponding
// to the amount of digits in the given integer num.

// function numberCount(num) {
//   let quotient = num;
//   let count = 0;F

//   while (quotient >= 1) {
//     quotient = quotient / 10;
//     count++;
//   }

//   return count;
// }

// console.log(numberCount(1000));  // Output: 4
// console.log(numberCount(-1000));  // Output: 4
// console.log(numberCount(10000));  // Output: 4
// console.log(numberCount(3283));  // Output: 4
// console.log(numberCount(3));  // Output: 4
// console.log(numberCount(10));  // Output: 4

//CHALLENGE 2
// You are given an array a containing integers. Your task is to implement the solution function to sort the array in ascending order,
// while preserving the original index positions of -1 values.
// Write a function solution(a) that takes in an array a and returns a new array with the following conditions:
// All non -1 values in the array should be sorted in ascending order.
// The -1 values should retain their original index positions in the sorted array.

//--PARTS--//
//an array containing integers - done
//sort the array in ascending order - done
//preserve the original index positions of -1 values

//function solution(a) that takes in an array a
//returns a new array with the following conditions
//All non -1 values in the array should be sorted in ascending order.
// The -1 values should retain their original index positions in the sorted array.
//function solution(arr){
  //if(){

  //}
  
  // const sortedArray = arr.sort((a,b) => a-b)
  // return sortedArray
//}

// function solution(array) {
  
//   if(array.includes(-1)){// If the array includes -1
//       const filtered = array.filter(item => item !== -1)// filter the array and return items that are not -1, store result in filtered variable
//       filtered.sort((a, b) => a - b)// sort filtered variable in ascending order, the sort is done in place (the original value is changed, no variable required) 
//       for(let i = 0; i < array.length; i++){//set a for loop to iterate through the length of the array
//           if (array[i] !== -1){// if current item in array is not equal to -1
//               array[i] = filtered[0] //current item in array is equal to first item in filtered
//               filtered.splice(0, 1)// at first position of filtered array remove 1 item 
//           }
//       }
//   } else array.sort((a, b) => a - b)// if there is no -1 just do an ascending sort
  

//   return array //return the resulting array
  
// }

// console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
// console.log(solution([5, 3, 1]))
// console.log(solution([-1, -1, -1, -1]))
// console.log(solution([100, -1, 50, -1, 75]))

//CHALLENGE 3
//Create a function that takes a number as an argument. Add up all the numbers from 1 to the number
//you passed to the function. For example, if the input is 4 then your 
//function should return 10 because 1 + 2 + 3 + 4 = 10.

//Create a function that takes an argument
// function addUpNumbers(num) {
//   // Add up all the numbers from 1 to the number
//   // you passed to the function.
//   let sum = 0; // Sum is initialized at 0 
//   for (let i = 1; i <= num; i++) {//Start a for loop (Initialize i at 1, run this loop until i is equal to num
//                                   // add 1 to i )
//     sum += i;// Add the value of i to the sum variable. Also expressed: sum = sum + i
//   }
//   return sum;// Return
// }
//TESTS
// console.log(addUpNumbers(4));
// console.log(addUpNumbers(40));
// console.log(addUpNumbers(400));
// console.log(addUpNumbers(4000));
// console.log(addUpNumbers(11));
// console.log(addUpNumbers(12));
// console.log(addUpNumbers(13));
// console.log(addUpNumbers(14));
// console.log(addUpNumbers(15));

//console.log(addUpNumbers([1,2,3,4,5,6,7,8,9,10]))


// var readline = require('readline-sync');

// // Function to shift a single character by a given number of positions
// function shiftChar(char, shift) {
//     // Define the alphabet
//     var alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     var isUpperCase = false;

//     // Check if the character is uppercase
//     if (char === char.toUpperCase()) {
//         char = char.toLowerCase();
//         isUpperCase = true;
//     }

//     // Find the index of the character in the alphabet
//     var index = alphabet.indexOf(char);

//     // If the character is not in the alphabet, return it unchanged
//     if (index === -1) {
//         return char;
//     }

//     // Apply the shift
//     var newIndex = (index + shift) % alphabet.length;

//     // If the index is negative, adjust it
//     if (newIndex < 0) {
//         newIndex += alphabet.length;
//     }

//     // Get the shifted character
//     var shiftedChar = alphabet[newIndex];

//     // Convert back to uppercase if the original character was uppercase
//     if (isUpperCase) {
//         shiftedChar = shiftedChar.toUpperCase();
//     }

//     return shiftedChar;
// }

// // Function to encrypt a given text using a Caesar cipher with a specified shift
// function caesarCipher(text, shift) {
//     var encryptedText = '';

//     // Iterate through each character in the input text
//     for (var i = 0; i < text.length; i++) {
//         // Shift letters and leave other characters unchanged
//         encryptedText += shiftChar(text[i], shift);
//     }

//     return encryptedText;
// }

// // Get input from the user
// var input = readline.question('What phrase would you like to encrypt? ');
// var shift = parseInt(readline.question('How many letters would you like to shift? '));

// // Encrypt the input text using the Caesar cipher
// var encryptedText = caesarCipher(input, shift);

// // Print the encrypted text
// console.log('Encrypted text:', encryptedText);

function filterAnagrams(arr, target) {
    const param1 = arr.map(word => word.split("").sort().join(""));
    const param2 = target.split("").sort().join("");
    
    const compareResult = arr.filter((word, index) => param1[index] === param2);
    return compareResult;
}

const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
const target = 'enlist';

const anagrams = filterAnagrams(words, target);
console.log("anagrams here: " + anagrams); // Output: ['listen', 'silent']
