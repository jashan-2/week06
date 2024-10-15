function validateForm(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    if (username.length < 5) {
        errorMessage.textContent = "Username must be at least 5 characters long.";
        return;
    }

    if (password.length < 8) {
        errorMessage.textContent = "Password must be at least 8 characters long.";
        return;
    }

    errorMessage.textContent = "";
    alert("Form submitted successfully!");
    document.getElementById("loginForm").submit();
}

document.getElementById("loginForm").addEventListener("submit", validateForm);
