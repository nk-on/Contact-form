"use strict";
const firstNameInput = document.querySelector('#first-name');
const firstNameErrorMessage = document.querySelector('#error-message-firstName');
const lastNameInput = document.querySelector('#last-name');
const lastNameErrorMessege = document.querySelector('#error-message-lastName');
const submitButton = document.querySelector('#submit-button');
const emailInput = document.querySelector('#Email');
const emailErrorMessege = document.querySelector('#error-message-email');
function checkEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validEmail = emailRegex.test(emailInput.value);
    validEmail ? emailErrorMessege.style.display = 'none' : emailErrorMessege.style.display = 'block';
}
function checkInput(e) {
    e.preventDefault();
    checkEmail();
    firstNameInput.value === '' ? firstNameErrorMessage.style.display = 'block' : firstNameErrorMessage.style.display = 'none';
    lastNameInput.value === '' ? lastNameErrorMessege.style.display = 'block' : lastNameErrorMessege.style.display = 'none';
}
submitButton.addEventListener('click', checkInput);
