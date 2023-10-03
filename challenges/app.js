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

function findVowels(word){
    //make a variable to contain the count
    let count = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    //make for loop to check each character in word
    //make if statement that checks for vowels
    for (let i = 0; i < word.length; i++) {
      // Make an if statement that checks for vowels
      if (vowels.includes(word[i].toLowerCase())) {
        count++;
      }
    }
    return count
    }
    
    console.log(findVowels("Hello"))
    console.log(findVowels("Death"))
    console.log(findVowels("seven"))
    console.log(findVowels("why"))
    
    // You can state the vowels challenge as follows:
    //  write a function that takes a string as argument - done
    //  and returns the number of vowels contained in that string.