#!/ usr/bin/node

// Create the divideBy function
function divideBy(firstNumber) {
    // Return a function that takes a second number and divides it by the first number
    return function (secondNumber) {
      return secondNumber / firstNumber;
    };
  }
  
  // Create the addBy function
  function addBy(firstNumber) {
    // Return a function that takes a second number and adds it to the first number
    return function (secondNumber) {
      return firstNumber + secondNumber;
    };
  }
  
  // Create the closures
  const addBy100 = addBy(100);
  const addBy1000 = addBy(1000);
  const divideBy10 = divideBy(10);
  const divideBy100 = divideBy(100);
  
  // Test the closures
  console.log(addBy100(20));     // Should display 120
  console.log(divideBy10(20));   // Should display 2
  console.log(divideBy100(200)); // Should display 2
  console.log(addBy1000(20));    // Should display 1020
  