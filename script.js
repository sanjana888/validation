// Selecting form and input fields
const form = document.getElementById('validationForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// Selecting error messages
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Validation functions
function validateName() {
    if (fullName.value.trim().length < 5) {
        nameError.textContent = 'Name must be at least 5 characters.';
        return false;
    }
    nameError.textContent = '';
    return true;
}

function validateEmail() {
    if (!email.value.includes('@')) {
        emailError.textContent = 'Enter a valid email address.';
        return false;
    }
    emailError.textContent = '';
    return true;
}

function validatePhone() {
    const phoneValue = phone.value.trim();
    if (phoneValue === '123456789' || phoneValue.length !== 10 || isNaN(phoneValue)) {
        phoneError.textContent = 'Enter a valid 10-digit phone number.';
        return false;
    }
    phoneError.textContent = '';
    return true;
}

function validatePassword() {
    if (password.value.trim().toLowerCase() === 'password' ||
        password.value.trim().toLowerCase() === fullName.value.trim().toLowerCase() ||
        password.value.trim().length < 8) {
        passwordError.textContent = 'Password is not strong.';
        return false;
    }
    passwordError.textContent = '';
    return true;
}

function validateConfirmPassword() {
    if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        return false;
    }
    confirmPasswordError.textContent = '';
    return true;
}

// Real-time validation
fullName.addEventListener('change', validateName);
email.addEventListener('change', validateEmail);
phone.addEventListener('change', validatePhone);
password.addEventListener('change', validatePassword);
confirmPassword.addEventListener('change', validateConfirmPassword);

// Form submission validation
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid) {
        alert('Form submitted successfully!');
        form.reset(); // Reset form fields
    } else {
        alert('Please fix the errors in the form.');
    }
});
