// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("Registration Form");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh

    // Show success message
    successMessage.classList.remove("hidden");

    // Clear form fields
    form.reset();

    // Hide the message after 3 seconds
    setTimeout(() => {
      successMessage.classList.add("hidden");
    }, 3000);
  });
});
