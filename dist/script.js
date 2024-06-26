"use strict";
const firstNameInput = document.querySelector('#first-name');
const firstNameErrorMessage = document.querySelector('#error-message-firstName');
const lastNameInput = document.querySelector('#last-name');
const lastNameErrorMessege = document.querySelector('#error-message-lastName');
const submitButton = document.querySelector('#submit-button');
const emailInput = document.querySelector('#Email');
const emailErrorMessege = document.querySelector('#error-message-email');
const generalQuery = document.querySelector('#general');
const supportQuery = document.querySelector('#support');
const queryErrorMessege = document.querySelectorAll('.error-message-query');
const descriptionArea = document.querySelector('#description');
const descriptionErrorArea = document.querySelector('#description-error-messege');
function checkDescription() {
    if (descriptionArea.value === '') {
        descriptionErrorArea.style.display = 'block';
    }else{
        descriptionErrorArea.style.display = 'block';
    }
}
function checkQuery() {
    if (generalQuery.checked === false && supportQuery.checked === false) {
        queryErrorMessege.forEach((element) => element.style.display = 'block');
    }else{
        queryErrorMessege.forEach((element) => element.style.display = 'none');
    }
}
function checkEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validEmail = emailRegex.test(emailInput.value);
    validEmail ? emailErrorMessege.style.display = 'none' : emailErrorMessege.style.display = 'block';
}
function checkName() {
    firstNameInput.value === '' ? firstNameErrorMessage.style.display = 'block' : firstNameErrorMessage.style.display = 'none';
    lastNameInput.value === '' ? lastNameErrorMessege.style.display = 'block' : lastNameErrorMessege.style.display = 'none';
}
function checkInput(e) {
    e.preventDefault();
    checkDescription();
    checkQuery();
    checkEmail();
    checkName();
}
submitButton.addEventListener('click', checkInput);
