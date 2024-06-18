"use strict";
const firstNameInput = document.querySelector('#first-name');
const firstNameErrorMessage = document.querySelector('#error-message-firstName');
const lastNameInput = document.querySelector('#last-name');
const lastNameErrorMessege = document.querySelector('#error-message-lastName');
const submitButton = document.querySelector('#submit-button');
function checkInput(e) {
    e.preventDefault();
    firstNameInput.value === '' ? firstNameErrorMessage.style.display = 'block' : firstNameErrorMessage.style.display = 'none';
    lastNameInput.value === '' ? lastNameErrorMessege.style.display = 'block' : lastNameErrorMessege.style.display = 'none';
}
submitButton.addEventListener('click', checkInput);
