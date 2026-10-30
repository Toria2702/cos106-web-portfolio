// ===============================================================
// COS 106: Introduction to Web Technologies - Contact Form Validation
// Student: Victoria Okon | Matric: MIVA/BSc/SE/2025/0428
// Requirements:
// 1. Ensure no field is empty
// 2. Ensure email format is valid (contains @ and a valid domain)
// 3. Ensure phone number contains only digits
// ===============================================================

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const formAlert = document.getElementById("formAlert");

  const nameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("emailAddress");
  const phoneInput = document.getElementById("phoneNumber");
  const messageInput = document.getElementById("messageText");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const messageError = document.getElementById("messageError");

  // Regex patterns
  // Email pattern: characters before @, characters after @, followed by a dot and domain
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // Phone pattern: digits only (between 7 and 15 digits)
  const phonePattern = /^\d{7,15}$/;

  // Helper function to set an error state on an input field
  function showError(input, errorElement, message) {
    input.classList.add("error");
    errorElement.textContent = message;
    errorElement.classList.add("active");
  }

  // Helper function to clear error state on an input field
  function clearError(input, errorElement) {
    input.classList.remove("error");
    errorElement.textContent = "";
    errorElement.classList.remove("active");
  }

  // Validation function for Name
  function validateName() {
    const val = nameInput.value.trim();
    if (val === "") {
      showError(nameInput, nameError, "Full name cannot be empty.");
      return false;
    }
    clearError(nameInput, nameError);
    return true;
  }

  // Validation function for Email
  function validateEmail() {
    const val = emailInput.value.trim();
    if (val === "") {
      showError(emailInput, emailError, "Email address cannot be empty.");
      return false;
    } else if (!emailPattern.test(val)) {
      showError(emailInput, emailError, "Please enter a valid email address (e.g. name@domain.com).");
      return false;
    }
    clearError(emailInput, emailError);
    return true;
  }

  // Validation function for Phone Number (digits only)
  function validatePhone() {
    const val = phoneInput.value.trim();
    if (val === "") {
      showError(phoneInput, phoneError, "Phone number cannot be empty.");
      return false;
    } else if (!/^\d+$/.test(val)) {
      showError(phoneInput, phoneError, "Phone number must contain digits only (no spaces, letters, or dashes).");
      return false;
    } else if (!phonePattern.test(val)) {
      showError(phoneInput, phoneError, "Phone number must be between 7 and 15 digits.");
      return false;
    }
    clearError(phoneInput, phoneError);
    return true;
  }

  // Validation function for Message
  function validateMessage() {
    const val = messageInput.value.trim();
    if (val === "") {
      showError(messageInput, messageError, "Message cannot be empty.");
      return false;
    }
    clearError(messageInput, messageError);
    return true;
  }

  // Real-time blur event listeners for immediate user feedback
  nameInput.addEventListener("blur", validateName);
  emailInput.addEventListener("blur", validateEmail);
  phoneInput.addEventListener("blur", validatePhone);
  messageInput.addEventListener("blur", validateMessage);

  // Clear errors when the user begins retyping
  nameInput.addEventListener("input", function () {
    if (nameInput.value.trim() !== "") clearError(nameInput, nameError);
  });
  emailInput.addEventListener("input", function () {
    if (emailInput.value.trim() !== "") clearError(emailInput, emailError);
  });
  phoneInput.addEventListener("input", function () {
    if (phoneInput.value.trim() !== "") clearError(phoneInput, phoneError);
  });
  messageInput.addEventListener("input", function () {
    if (messageInput.value.trim() !== "") clearError(messageInput, messageError);
  });

  // Form submit handler
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Run all validations
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isMessageValid = validateMessage();

    // Check if all fields passed validation
    if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
      const studentMessage = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        message: messageInput.value.trim(),
        submittedAt: new Date().toLocaleString()
      };

      // Save submission to browser localStorage
      const existingMessages = JSON.parse(localStorage.getItem("miva_contact_submissions") || "[]");
      existingMessages.push(studentMessage);
      localStorage.setItem("miva_contact_submissions", JSON.stringify(existingMessages));

      // Display success message banner
      formAlert.className = "alert-box success";
      formAlert.innerHTML = `<strong>Thank you, ${studentMessage.name}!</strong> Your message has been validated and sent successfully.`;

      // Reset form fields
      contactForm.reset();

      // Automatically hide alert message after 6 seconds
      setTimeout(function () {
        formAlert.className = "alert-box";
        formAlert.innerHTML = "";
      }, 6000);
    } else {
      // Focus on first invalid input
      if (!isNameValid) nameInput.focus();
      else if (!isEmailValid) emailInput.focus();
      else if (!isPhoneValid) phoneInput.focus();
      else if (!isMessageValid) messageInput.focus();
    }
  });
});
