const form = document.querySelector(".contact-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const textarea = document.querySelector(".form-error");

const nameError = document.querySelector("#name-error");
const mailError = document.querySelector("#mail-error");
const messageError = document.querySelector("#message-error");
const subjectError = document.querySelector("#subject-error");

function validateContactForm() {
    event.preventDefault();

    if(checkLength(name.value, 5)=== true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }
    if (emailValidation(email.value) === true) {
        mailError.style.display = "none";
    } else {
        mailError.style.display = "block";
    }
    if (checkLength(subject.value, 15)  === true)  {
        subjectError.style.display = "none";
    } else {
        console.log("false");
        subjectError.style.display = "block";
    }
    if (checkLength(message.value, 25)  === true)  {
        messageError.style.display = "none";
    } else {
        console.log("false");
        messageError.style.display = "block";
    }
    if ((checkLength(name.value, 5) === true) && (emailValidation(email.value) === true) && (checkLength(subject.value, 15)  === true) && (checkLength(message.value, 25) === true)) {

        const thanks = document.querySelector(".thankyou-message");
        const plane = document.querySelector(".flight");
            form.style.display = "none";
            thanks.style.display = "block";
            plane.style.display = "block";
    } else {
            textarea.innerHTML = "*Please check inputs";
            textarea.style.background = "pink";
    }
}

form.addEventListener("submit", validateContactForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}
function emailValidation(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}
