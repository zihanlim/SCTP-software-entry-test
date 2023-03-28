/*
    Task 1:
    - Add a new property "breed" with the value "Poodle"

    Task 2: 
    - Implement a for-in to loop through the keys in "dog" object and print it with console.log()
*/

// Task 1: Add new property "breed" to "dog" object
const dog = {
    petName:"Bobby",
    age:3,
};
dog.breed="bulldog"

// Task 2: Loop through keys in "dog" object and print with console.log()
for (const key in dog) {
    console.log(`${key}: ${dog[key]}`);
  }