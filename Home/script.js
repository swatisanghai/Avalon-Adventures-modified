document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const question = document.getElementById("question").value;

        if (!name || !email || !question) {
            event.preventDefault();
            alert("Please fill in all required fields.");
        }
    });
});
