const firstNameInput = document.querySelector('#first-name') as HTMLInputElement;
const firstNameErrorMessage = document.querySelector('#error-message-firstName') as HTMLLabelElement;
const lastNameInput = document.querySelector('#last-name') as HTMLInputElement;
const lastNameErrorMessege = document.querySelector('#error-message-lastName') as HTMLLabelElement;
const submitButton = document.querySelector('#submit-button') as HTMLButtonElement;
function checkInput(e: any): void {
    e.preventDefault();
    firstNameInput.value === '' ?  firstNameErrorMessage.style.display = 'block' : firstNameErrorMessage.style.display = 'none';
    lastNameInput.value === '' ? lastNameErrorMessege.style.display = 'block' : lastNameErrorMessege.style.display = 'none';
}
submitButton.addEventListener('click', checkInput)