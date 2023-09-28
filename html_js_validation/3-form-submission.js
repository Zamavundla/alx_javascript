// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieve form field values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Validate form fields
    if (name.trim() === '' || email.trim() === '') {
        // Display an error message if required fields are empty
        alert('Please fill in all required fields.');
    } else {
        // Display a success message if all validations pass
        alert('Form submitted successfully!');
        // You can submit the form to a server here if needed
    }
}

// Add an event listener to the form to listen for the "submit" event
document.getElementById('submitForm').addEventListener('submit', handleFormSubmit);
