document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Reset error messages
    document.getElementById("usernameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";

    // Get form inputs
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Validate inputs
    if (!username) {
        document.getElementById("usernameError").textContent = "Username is required";
        return;
    }

    if (!email) {
        document.getElementById("emailError").textContent = "Email is required";
        return;
    }

    if (!password) {
        document.getElementById("passwordError").textContent = "Password is required";
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match";
        return;
    }

    // Form submission successful
    alert("Registration successful!");
});
