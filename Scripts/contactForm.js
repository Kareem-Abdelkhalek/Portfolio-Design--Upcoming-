// Initialize EmailJS
emailjs.init("4DP6hOPyoOgbj98Vz");

const contactForm = document.querySelector(".contact-form");
const formInputs = contactForm.querySelectorAll("input, textarea");
const submitBtn = contactForm.querySelector("button[type='submit']");

// Form validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validateForm() {
  let isValid = true;

  formInputs.forEach((input) => {
    if (input.value.trim() === "") {
      isValid = false;
      input.style.borderBottomColor = "red";
    } else if (input.type === "email" && !validateEmail(input.value)) {
      isValid = false;
      input.style.borderBottomColor = "red";
    } else {
      input.style.borderBottomColor = "rgba(255, 255, 255, 0.2)";
    }
  });

  return isValid;
}

// Remove error styling on input
formInputs.forEach((input) => {
  input.addEventListener("input", () => {
    input.style.borderBottomColor = "rgba(255, 255, 255, 0.2)";
  });
});

// Handle form submission
contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    showNotification("Please fill in all fields correctly", "error");
    return;
  }

  const formData = {
    name: contactForm.querySelector('input[type="text"]').value,
    email: contactForm.querySelector('input[type="email"]').value,
    message: contactForm.querySelector("textarea").value,
  };

  // Disable button and show loading state
  submitBtn.disabled = true;
  const originalText = submitBtn.textContent;
  submitBtn.textContent = "SENDING...";

  try {
    await emailjs.send("service_e37l2rb", "template_7bgkgxh", formData);

    showNotification(
      "Message sent successfully! I'll get back to you soon.",
      "success"
    );
    contactForm.reset();
  } catch (error) {
    showNotification("Failed to send message. Please try again.", "error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
});

// Notification function
function showNotification(message, type) {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("show");
  }, 100);

  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 4000);
}
