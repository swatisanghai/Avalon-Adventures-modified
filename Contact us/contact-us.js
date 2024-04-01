// Function to validate the contact form before submission
function validateForm() {
    // Get the values of the name, email, and question fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var question = document.getElementById("question").value;

    // Check if any of the required fields are empty
    if (name === "" || email === "" || question === "") {
        // If any required field is empty, display an alert message
        alert("Please fill out all required fields.");
        // Return false to prevent form submission
        return false;
    }
    // If all required fields are filled, return true to allow form submission
    return true;
}
