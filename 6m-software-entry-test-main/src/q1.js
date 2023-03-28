/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console
    Task 2
    - invoke the function "swap"
*/

//take input from the users
// let x = prompt('Enter the first variable: ');
// let y = prompt('Enter the second variable: ');

let x = 10;
let y = 20;

// Task 1: Add code here
function swap(x, y){
    if (typeof x !== 'number' || typeof y !== 'number') {
        return -1;
      }
    
      x = x + y;
      y = x - y;
      x = x - y;
    
      console.log('x:', x, 'y:', y);
    }
// Task 2: Add code here
swap(x,y);

module.exports = swap;

