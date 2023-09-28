// Function to validate the password
function validatePassword(password) {
    const minLength = 8;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*]/;

    if (
        password.length >= minLength &&
        uppercaseRegex.test(password) &&
        lowercaseRegex.test(password) &&
        digitRegex.test(password) &&
        specialCharRegex.test(password)
    ) {
        return true; // Password meets all criteria
    } else {
        return false; // Password does not meet all criteria
    }
}

// Form submission event listener
document.getElementById('passwordForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Retrieve the password input value
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;

    // Validate the password
    if (validatePassword(password)) {
        // Password is valid, clear the error message
        document.getElementById('error').textContent = '';
        // Allow form submission (you can remove this line to prevent submission)
        // document.getElementById('passwordForm').submit();
    } else {
        // Password is invalid, display an error message
        document.getElementById('error').textContent =
            'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.';
    }
});
