// Ensure the script runs after the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    
    // Handle Contact Form Submission
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();

        // Collect form data
        let formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        // Send data to backend
        fetch("https://your-backend-url/contact", { // Change to your deployed backend URL
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message); // Show success message
            document.querySelector("form").reset(); // Clear form fields
        })
        .catch(error => console.error("Error:", error));
    });

    // Track visitors
    fetch("https://your-backend-url/track-visitor", { method: "POST" })
    .then(response => response.json())
    .then(data => console.log("Visitor tracked:", data))
    .catch(error => console.error("Tracking error:", error));
});
