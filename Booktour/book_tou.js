// JavaScript for Form Validation (Optional)
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    var form = document.getElementById("bookingForm");
    if (!form.checkValidity()) {
        event.preventDefault();
        alert("Please fill out all required fields.");
    }
});
