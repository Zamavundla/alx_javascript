// Function to generate input fields based on the selected value
function generateInputFields(num) {
    const inputContainer = document.getElementById('inputContainer');
    inputContainer.innerHTML = ''; // Clear previous fields

    for (let i = 1; i <= num; i++) {
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.name = `field${i}`;
        inputField.placeholder = `Field ${i}`;
        inputContainer.appendChild(inputField);
    }
}

// Function to validate the form before submission
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    const numFields = document.getElementById('numFields');
    const selectedValue = parseInt(numFields.value, 10);

    // Loop through the input fields and check if any are empty
    for (let i = 1; i <= selectedValue; i++) {
        const inputField = document.querySelector(`input[name="field${i}"]`);
        if (!inputField.value.trim()) {
            alert('Please fill in all fields.');
            return; // Stop validation if any field is empty
        }
    }

    // If all fields are filled, allow form submission
    document.getElementById('dynamicForm').submit();
}

// Add an event listener to detect changes in the dropdown selection
document.getElementById('numFields').addEventListener('change', function () {
    const selectedValue = parseInt(this.value, 10);
    generateInputFields(selectedValue);
});

// Add an event listener to handle form submission
document.getElementById('dynamicForm').addEventListener('submit', validateForm);
