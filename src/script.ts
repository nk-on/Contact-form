const firstNameInput = document.querySelector('#first-name') as HTMLInputElement;
const firstNameErrorMessage = document.querySelector('#error-message-firstName') as HTMLLabelElement;
const lastNameInput = document.querySelector('#last-name') as HTMLInputElement;
const lastNameErrorMessege = document.querySelector('#error-message-lastName') as HTMLLabelElement;
const submitButton = document.querySelector('#submit-button') as HTMLButtonElement;
const emailInput = document.querySelector('#Email') as HTMLInputElement;
const emailErrorMessege = document.querySelector('#error-message-email') as HTMLLabelElement
function checkEmail(): void {
    const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validEmail: boolean = emailRegex.test(emailInput.value);
    validEmail ? emailErrorMessege.style.display = 'none' : emailErrorMessege.style.display = 'block'
}
function checkInput(e: any): void {
    e.preventDefault();
    checkEmail();
    firstNameInput.value === '' ? firstNameErrorMessage.style.display = 'block' : firstNameErrorMessage.style.display = 'none';
    lastNameInput.value === '' ? lastNameErrorMessege.style.display = 'block' : lastNameErrorMessege.style.display = 'none';
}
submitButton.addEventListener('click', checkInput)