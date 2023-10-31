document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("portfolioForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (e) {
        let isValid = true;

        // Reset error messages
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        // Name validation
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Name is required";
            isValid = false;
        }

        // Email validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = "Invalid email format";
            isValid = false;
        }

        // Message validation
        if (messageInput.value.trim() === "") {
            messageError.textContent = "Message is required";
            isValid = false;
        }

        if (!isValid) {
            e.preventDefault();
        } else {
            form.style.display = "none";
            successMessage.style.display = "block";
        }
    });
});
