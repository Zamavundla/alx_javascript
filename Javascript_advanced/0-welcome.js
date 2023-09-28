#!/ usr/bin/node

function welcome(firstName, lastName) {
    // Combine first name and last name to create fullName
    const fullName = firstName + ' ' + lastName;
  
    // Define the displayFullName function
    function displayFullName() {
      // Display a welcome message with the full name
      alert('Welcome ' + fullName + '!');
    }
  
    // Call the displayFullName function
    displayFullName();
  }
  
  // Example usage:
  welcome('John', 'Doe');
  