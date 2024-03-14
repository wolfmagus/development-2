// 15
function countTo100() {
    let count = 1;
  
    const intervalId = setInterval(() => {
      console.log(count);
  
      if (count === 100) {
        clearInterval(intervalId);
      }
  
      count++;
    }, 500); // 500 milliseconds interval
  
    // Stop counting after approximately 50 seconds
    setTimeout(() => {
      clearInterval(intervalId);
      console.log('Counting stopped after 50 seconds.');
    }, 50000); // 50,000 milliseconds (50 seconds)
  }
  
  countTo100();
  

// Number 19
console.log('\x1b[36m%s\x1b[0m', 'I am cyan'); 
console.log('\x1b[31m%s\x1b[0m', 'I am red');
console.log('\x1b[32m%s\x1b[0m', 'I am green');
console.log('\x1b[33m%s\x1b[0m', 'I am yellow');
console.log('\x1b[34m%s\x1b[0m', 'I am blue');
console.log('\x1b[35m%s\x1b[0m', 'I am magenta');
console.log('\x1b[37m%s\x1b[0m', 'I am white');
console.log('\x1b[91m%s\x1b[0m', 'I am bright red');
console.log('\x1b[92m%s\x1b[0m', 'I am bright green');
console.log('\x1b[93m%s\x1b[0m', 'I am bright yellow');

//20
// Display some messages in the console
// console.log('This is a message.');
// console.warn('This is a warning.');
// console.error('This is an error.');

// // Clear the console
// console.clear();

// // After clearing, you won't see the previous messages
// console.log('Console cleared. This message will be visible.');
