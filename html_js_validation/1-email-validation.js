// Function to validate the email format
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailRegex.test(email);
}

// Form submission event listener
document.getElementById('emailForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Retrieve the email input value
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    // Validate the email format
    if (validateEmail(email)) {
        // Email format is valid, clear the error message
        document.getElementById('error').textContent = '';
        // Allow form submission (you can remove this line to prevent submission)
        // document.getElementById('emailForm').submit();
    } else {
        // Email format is invalid, display an error message
        document.getElementById('error').textContent =
            'Please enter a valid email address.';
    }
});
