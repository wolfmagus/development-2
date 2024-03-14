// function addNumbers(...numbers) {
//     // numbers is now an array that we can use .reduce() on
//     return numbers.reduce((sum, number) => {
//       return sum + number;
//     }, 0);
//   }
  
  
//   console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8))

// Function to find even numbers
// function findEvenNumbers(arr) {
//   const evenNumbers = [];

//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];
//     if (num % 2 === 0) {
//       evenNumbers.push(num);
//     }
//   }

//   return evenNumbers;
// }

// console.log(findEvenNumbers([1,2,3,4,5,6,7,8,9,10])) // Expected Output:  [2,4,6,8,10]
// console.log(findEvenNumbers([11, 22, 33, 44, 55, 66, 77, 88, 99, 100])) // Expected Output:  [22, 44, 66, 88, 100]

const names = [ "Jerry", "Adam" ]

const person = { firstName: "Robert", lastName: "Jones", age: 37 }

//Expected Output: [ "Jerry", "Adam", "Robert"]

let newName = names.push(person.firstName)

console.log(newName)