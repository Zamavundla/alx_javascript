#!/ usr/bin/node

// Creating a global variable
const globalVariable = 'Welcome';

// Creating the outer function
function outer() {
  // Alerting the content of globalVariable
  alert(globalVariable);

  // Creating a local variable named course
  const course = 'Holberton';

  // Creating the inner function
  function inner() {
    // Alerting the content of globalVariable and course (concatenated)
    alert(globalVariable + ' ' + course);

    // Creating a local variable named exclamation
    const exclamation = '!';

    // Creating the inception function
    function inception() {
      // Step 9: Alert the content of globalVariable, course, and exclamation (concatenated)
      alert(globalVariable + ' ' + course + exclamation);
    }

    // Calling the inception function
    inception();
  }

  // Calling the inner function
  inner();
}

// Call the outer function in the main code
outer();
