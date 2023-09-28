#!/ usr/bin/node

function welcomeMessage(fullName) {
    // Define a closure that displays a welcome message with the provided fullName
    return function () {
      alert('Welcome ' + fullName);
    };
  }
  
  // Create variables with calls to welcomeMessage
  const guillaume = welcomeMessage('Guillaume');
  const alex = welcomeMessage('Alex');
  const fred = welcomeMessage('Fred');
  
  // Call the variables (functions) to display the welcome messages
  guillaume(); // This will display "Welcome Guillaume"
  alex();      // This will display "Welcome Alex"
  fred();      // This will display "Welcome Fred"
  