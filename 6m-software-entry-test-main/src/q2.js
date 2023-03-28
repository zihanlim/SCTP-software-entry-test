/*
    Task 1: 
    - Declare an array that are going to be used to store patient's name.

    Task 2: 
    - Add code to add patient's name into the array declared in task 1.

    Task 3: 
    - Implement listPatient() function to print all patient's name stored in the array
*/


// Task 1: Declare an array that are going to be used to store patient's name.
const patients = [];
// Task 2:Add code to add patient's name into the array declared in task 1.
patients.push("John");
patients.push("Mary");
patients.push("Mark");
// Task 3: Implement listPatient() function to print all patient's name stored in the array
function listPatients() {
    if (patients.length === 0) {
      console.log("There are no patients in the system.");
    } else {
      console.log("List of patients:");
      patients.forEach((patient, index) => {
        console.log(`${index + 1}. ${patient}`);
      });
    }
  }
  
  // Call listPatients() function to print all patients
  listPatients();